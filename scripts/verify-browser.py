from pathlib import Path
from playwright.sync_api import sync_playwright
import json, os
P=Path(__file__).resolve().parents[1];R=P/'reference';R.mkdir(exist_ok=True)
BASE=os.environ.get('BASE_URL','http://127.0.0.1:5173').rstrip('/')
with sync_playwright() as p:
 browser=p.chromium.launch(headless=True,executable_path=os.environ.get('CHROME_BIN','/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'))
 page=browser.new_page(viewport={'width':1440,'height':1000},device_scale_factor=1,locale='zh-CN')
 errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
 page.goto(BASE+'/',wait_until='networkidle');page.wait_for_timeout(1000)
 page.evaluate('document.querySelectorAll("video").forEach(v=>{v.pause();v.currentTime=0})');page.wait_for_timeout(300)
 page.screenshot(path=str(R/'local-desktop.png'))
 print('TOP',page.locator('h1').inner_text(),page.evaluate('({width:innerWidth,scrollWidth:document.documentElement.scrollWidth,height:document.body.scrollHeight})'),flush=True)
 for y in range(0,int(page.evaluate('document.body.scrollHeight')),700):page.evaluate('(y)=>window.scrollTo(0,y)',y);page.wait_for_timeout(200)
 page.wait_for_timeout(800);page.screenshot(path=str(R/'local-full.png'),full_page=True)
 print('BROKEN',page.locator('img').evaluate_all('(els)=>els.filter(e=>e.complete&&e.naturalWidth===0).map(e=>e.src)'),flush=True)
 page.get_by_role('tab',name='详情页组图',exact=True).click();page.get_by_role('heading',name='围绕卖点组织整套详情内容').wait_for()
 page.get_by_role('tab',name='营销短视频',exact=True).click();page.get_by_role('heading',name='把静态商品素材转成动态内容').wait_for()
 page.get_by_role('button',name='真的可以只拍一张照片就生成多种内容吗？').click();assert page.get_by_text('可以。系统会基于一张素材生成不同风格的图片、视频与文案，并支持继续迭代优化。').is_visible()
 page.get_by_role('tab',name='详情图',exact=True).click();assert page.locator('#showcase-panel img').count()==16
 page.get_by_role('tab',name='人像摄影',exact=True).click();assert page.locator('#showcase-panel img').count()==14
 page.get_by_role('tab',name='视频',exact=True).click();assert page.locator('#showcase-panel video').count()==14
 page.locator('#showcase-panel button').first.click();page.wait_for_function('document.querySelector("#showcase-panel video").currentTime > 0',timeout=20000);page.locator('#showcase-panel button').first.click();assert page.locator('#showcase-panel video').first.evaluate('(v)=>v.paused')
 page.get_by_role('tab',name='口播视频',exact=True).click();assert page.locator('#showcase-panel video').count()==9
 page.get_by_role('tab',name='服装视频',exact=True).click();assert page.locator('#showcase-panel video').count()==16
 page.get_by_role('tab',name='图片',exact=True).click();page.get_by_role('tab',name='主图',exact=True).click();page.locator('#showcase-panel button').first.click();page.get_by_role('dialog').wait_for();assert page.locator('.case-scroll img').count()==5;page.locator('.case-scroll img').first.wait_for();page.wait_for_function('document.querySelector(".case-scroll img").naturalWidth > 0');page.screenshot(path=str(R/'local-gallery-modal.png'));page.keyboard.press('Escape');assert page.get_by_role('dialog').count()==0
 page.get_by_role('button',name='立即联系客服',exact=True).click();assert page.get_by_role('dialog').is_visible();page.keyboard.press('Escape')
 page.get_by_role('button',name='代理加盟',exact=True).click();page.get_by_role('dialog').wait_for();page.screenshot(path=str(R/'local-partner.png'));page.get_by_role('button',name='立即咨询合作',exact=True).click();assert page.get_by_role('dialog',name='联系客服').is_visible();page.keyboard.press('Escape')
 page.goto(BASE+'/apparel/',wait_until='networkidle');page.wait_for_timeout(700);page.screenshot(path=str(R/'local-apparel.png'));slider=page.get_by_role('slider');slider.focus();slider.press('ArrowRight');assert slider.get_attribute('aria-valuenow')=='55'
 page.goto(BASE+'/download/',wait_until='networkidle');assert page.get_by_role('heading',name='把批量出图搬到本地').is_visible();assert page.get_by_text('Universal · 版本 1.0.0 · 大小 184.42 MB',exact=True).is_visible();page.screenshot(path=str(R/'local-download.png'))
 page.goto(BASE+'/open-api/',wait_until='networkidle');page.get_by_label('联系邮箱').fill('test@example.com');page.get_by_label('使用场景').fill('本地界面验证');page.get_by_role('button',name='提交登记').click();assert page.get_by_text('登记内容已保存',exact=True).is_visible();assert page.evaluate('Boolean(localStorage.getItem("ifrog-api-enquiry-draft"))')
 page.screenshot(path=str(R/'local-api.png'))
 page.set_viewport_size({'width':390,'height':844});page.goto(BASE+'/',wait_until='networkidle');page.wait_for_timeout(500);page.evaluate('document.querySelectorAll("video").forEach(v=>{v.pause();v.currentTime=0})');page.screenshot(path=str(R/'local-mobile.png'))
 assert page.evaluate('document.documentElement.scrollWidth <= innerWidth')
 page.get_by_role('button',name='切换菜单',exact=True).click();assert page.get_by_role('navigation',name='移动端导航').is_visible();page.screenshot(path=str(R/'local-mobile-menu.png'))
 for width in [768,1024,1280]:
  page.set_viewport_size({'width':width,'height':900});page.wait_for_timeout(250);assert page.evaluate('document.documentElement.scrollWidth <= innerWidth'),f'overflow at {width}'
 (R/'verification.json').write_text(json.dumps({'baseUrl':BASE,'pageErrors':errors,'checks':['desktop and mobile layouts','workflow tabs','FAQ accordion','all image/video gallery categories','stacked image viewer and Escape','inline video playback and pause','customer and partner dialogs','apparel comparison keyboard control','download route with macOS recommendation','API local draft','mobile navigation','no horizontal overflow at 390/768/1024/1280/1440px']},ensure_ascii=False,indent=2))
 print('PAGE ERRORS',errors,flush=True)
 assert not errors
 browser.close()
