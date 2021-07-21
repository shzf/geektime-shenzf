/**
 *
 * Created by shenzaifang on 2021-07-21
 */
import {V1} from './engine/index.js'
import NewsList from './engine/components/NewsList.js'

(async function a () {
    let newslist = await getNewsList();
    newslist = newslist.result.map((item) => {
        return {
            ...item,
            showImage: true,
            showDate: true
        }
    });

    const v1 = new V1({
        root: document.querySelector('#root')
    });

    v1.render(NewsList, {
        newslist,
        event: {
            openUrl: openUrl
        }
    })
})();

function openUrl (item) {
    window.open(item.path)
}

function getNewsList () {
    return fetch('https://api.apiopen.top/getWangYiNews', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            page: 1,
            count: 20,
        }),
    }).then(response => response.json())
}
