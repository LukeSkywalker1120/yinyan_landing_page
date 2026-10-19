from pathlib import Path
from playwright.sync_api import sync_playwright
import json, os, re

P = Path(__file__).resolve().parents[1]
R = P / 'reference'
R.mkdir(exist_ok=True)
BASE = os.environ.get('BASE_URL', 'http://127.0.0.1:5173').rstrip('/')
BRAND = '链星云 | 影焰AI'
LOGIN = 'https://yy.7w2.cn/login'
LEGACY = re.compile(r'\u8f7b\u8dc3|\u5c0f\u9752\u86d9|\x69\x66\x72\x6f\x67', re.I)
gallery = json.loads((P / 'src/data/gallery.json').read_text())

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True, executable_path=os.environ.get('CHROME_BIN', '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'))
    page = browser.new_page(viewport={'width': 1440, 'height': 1000}, locale='zh-CN')
    errors, requests = [], []
    page.on('pageerror', lambda e: errors.append(str(e)))
    page.on('request', lambda r: requests.append(r.url))

    def clean():
        assert not LEGACY.search(page.content()), 'Unexpected retired branding in page markup'
        assert page.locator('header a').filter(has_text='立即体验').first.get_attribute('href') == LOGIN
        assert BRAND in page.title()
        assert page.evaluate('document.documentElement.scrollWidth <= innerWidth'), 'Horizontal overflow'

    def shot(name, full=False):
        page.wait_for_timeout(350)
        page.screenshot(path=str(R / name), full_page=full, animations='disabled')

    for route, name in [('/', 'desktop'), ('/apparel/', 'apparel'), ('/download/', 'download'), ('/open-api/', 'api')]:
        page.goto(BASE + route, wait_until='networkidle')
        clean()
        assert page.locator('header img').get_attribute('src') == '/images/brand/yinyan-logo.png'
        assert page.locator('footer').inner_text().find(BRAND) >= 0
        shot(f'local-{name}.png')
        if route == '/apparel/':
            slider = page.get_by_role('slider')
            slider.focus(); slider.press('ArrowRight')
            assert slider.get_attribute('aria-valuenow') == '55'
        if route == '/download/':
            assert page.get_by_role('button', name='待配置').count() >= 1
            assert page.locator('a[href$=".zip"]').count() == 0
        if route == '/open-api/':
            page.get_by_label('联系邮箱').fill('test@example.com')
            page.get_by_label('使用场景', exact=True).fill('品牌替换验证')
            page.get_by_role('button', name='提交登记').click()
            assert page.get_by_text('登记内容已保存', exact=True).is_visible()
            assert page.evaluate('Boolean(localStorage.getItem("yinyan-api-enquiry-draft"))')
            clean()

    page.goto(BASE + '/', wait_until='networkidle')
    page.get_by_role('button', name=BRAND + ' 是什么？适合哪些团队使用？').click()
    clean()
    for tab in ['详情页组图', '营销短视频', '商品主图']:
        page.get_by_role('tab', name=tab, exact=True).click(); clean()
    for mode, groups in [('图片', [('主图','main'), ('详情图','detail'), ('人像摄影','portrait')]), ('视频', [('产品TVC','tvc'), ('口播视频','talking'), ('服装视频','apparel')])]:
        page.get_by_role('tab', name=mode, exact=True).click()
        for title, group in groups:
            page.get_by_role('tab', name=title, exact=True).click()
            selector = '#showcase-panel img' if mode == '图片' else '#showcase-panel video'
            assert page.locator(selector).count() == len(gallery[group]); clean()
        if mode == '视频':
            page.locator('#showcase-panel button').first.click()
            page.wait_for_function('document.querySelector("#showcase-panel video").currentTime > 0')
            page.locator('#showcase-panel button').first.click()
            assert page.locator('#showcase-panel video').first.evaluate('(v)=>v.paused')
    page.get_by_role('tab', name='图片', exact=True).click()
    page.locator('#showcase-panel button').first.click()
    page.wait_for_function('document.querySelector(".case-scroll img").naturalWidth > 0')
    clean(); shot('local-gallery-modal.png'); page.keyboard.press('Escape')
    page.get_by_role('button', name='立即联系客服', exact=True).click()
    assert page.get_by_text('客服联系方式待配置', exact=True).is_visible()
    clean(); shot('local-contact.png'); page.keyboard.press('Escape')
    page.get_by_role('button', name='移动端', exact=True).click()
    clean(); page.keyboard.press('Escape')
    page.get_by_role('button', name='代理加盟', exact=True).click()
    clean(); shot('local-partner.png'); page.keyboard.press('Escape')
    for width in [390, 768, 1024, 1280, 1440]:
        page.set_viewport_size({'width': width, 'height': 844})
        page.goto(BASE + '/', wait_until='networkidle'); clean()
        if width == 390:
            shot('local-mobile.png')
            page.get_by_role('button', name='切换菜单', exact=True).click()
            page.get_by_role('navigation', name='移动端导航').wait_for()
            clean(); shot('local-mobile-menu.png'); page.keyboard.press('Escape')
    assert not any(LEGACY.search(url) for url in requests)
    assert not errors, errors
    result = {'brand': BRAND, 'pageErrors': errors, 'checks': ['branding on all four routes', 'desktop and mobile logos and favicon', 'login destinations', 'no retired brand in markup or network requests', 'gallery categories and local previews', 'inline video playback and pause', 'workflow and FAQ', 'customer/mobile/partner dialogs', 'apparel comparison', 'download placeholders', 'API local draft', 'no overflow at 390/768/1024/1280/1440px']}
    (R / 'verification.json').write_text(json.dumps(result, ensure_ascii=False, indent=2))
    print(json.dumps(result, ensure_ascii=False, indent=2), flush=True)
    browser.close()
