// ==UserScript==
// @name         动漫花园Myheartsite镜像站种子重命名助手
// @namespace    https://github.com/askar882/DMHYMyheartsiteTorrentDownloader
// @version      1.0
// @description  使用资源标题自动重命名下载的种子文件
// @author       askar882
// @license      MIT
// @compatible   Chrome
// @supportURL   https://github.com/askar882/DMHYMyheartsiteTorrentDownloader
// @match        *://dongmanhuayuan.myheartsite.com/*
// @grant        none
// @noframe
// ==/UserScript==

(function() {
    'use strict';

    const config = {
        attributes: true,
        childList: true,
        subtree: true
    };
    const popObserver = new MutationObserver((mutationList, observer) => {
        let pop = document.querySelector('.pop:not(.hide)');
        if (pop) {
            let title = pop.querySelector('.pop-header > h3');
            if (title === null) {
                return;
            }
            title = title.innerText;
            let anchor = pop.querySelector('.pop-body .col-form-label a');
            if (anchor.download === '') {
                anchor.download = title.replace('/', ' ') + '.torrent';
                const url = anchor.href;
                anchor.href = '';
                if (anchor.onclick === null) {
                    anchor.onclick = event => {
                        // Return true if click event was called in script or user clicked multiple times. At this point, the href is alredy modified to URL of downloaded Blob data.
                        if (!event.isTrusted || anchor.href.startsWith('blob:')) {
                            return true;
                        }
                        let xhr = new XMLHttpRequest();
                        xhr.open('GET', url, true);
                        xhr.responseType = 'blob';
                        xhr.onreadystatechange = () => {
                            if (xhr.readyState === 4) {
                                anchor.href = window.URL.createObjectURL(xhr.response);
                                anchor.click();
                            }
                        };
                        xhr.send(null);
                        return false;
                    }
                }
            }
        }
    });
    popObserver.observe(document.getElementsByClassName('pop')[0], config);
})();