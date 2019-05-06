import polyline from './polyline.js';
import { Ymap, collection, createLine } from './ymaps.js';

const en_ru = {
    'All': 'Все',
    'Ride': 'Велосипед',
    'Walk': 'Ходьба'
};

const i18n = (word) => en_ru[word] || word;

/**
 * Strava API
 */

const get = (url, token) => fetch(url, {
    method: 'GET',
    headers: new Headers({
        Authorization: 'Bearer ' + token
    })
});

const search = [...(new URL(location.href)).searchParams.entries()].reduce((l, [k, e])=>({...l, [k]: e}), {});

const filterCollection = (collection, list, type) => {
    list.forEach(e => {
        if (type === 'All' || e.type === type) {
            collection.add(e.line);
        }
    })
}

if (search.code) {

    let token = null;

    fetch(
        'https://www.strava.com/oauth/token?' + [{
            client_id: 29536,
            client_secret: '37c9da3a9b91852ab74f08d70259d5be24ca7a48',
            code: search.code,
            grant_type: 'authorization_code'
        }]
        .reduce((x,o)=>(Object.entries(o)), 0)
        .map(([k,e])=>k+'='+e)
        .join('&'),
        {
            method: 'POST'
        }
    )
    .then(e => e.json())
    .then(e => (
        token = e.access_token,
        get('https://www.strava.com/api/v3/athlete/activities?per_page=200'.replace('{id}', e.athlete.id), token)
    ))
    .then(e => e.json())
    .then(list => list
        .map(({ id, name, type, start_date, distance, elapsed_time, map }, i) => {

            const coordinates = polyline.decode(map.summary_polyline);

            const date = new Date(start_date).toString().split('GMT')[0];
            const dist = parseFloat((distance / 1e3).toFixed(3));
            const time = parseFloat((elapsed_time / 36e2).toFixed(3));

            const line = createLine({
                coordinates,
                'label': `
                    <a href="https://www.strava.com/activities/${id}" target="_blank">${name}</a>
                    <div style="color: grey">
                        <div>${date}</div>
                        <div>${dist} км. ${time} ч.</div>
                        <div>Тип: ${i18n(type)}</div>
                    </div>
                `,
                'color': '#ff0000'
            });

            return { id, type, line };
        })
    )
    .then((list) => {

        let types = list.reduce((l, e) => l.includes(e.type) ? l : [...l, e.type], []);
        types.unshift('All')
        const type = types.includes('Ride') ? 'Ride' : types[0];

        filterCollection(collection, list, type);
        Ymap.setBounds(collection.getBounds());

        const select = document.querySelector('#types');

        select.children[0].remove();

        types.forEach(e => {
            const option = document.createElement('option');
            option.value = e;
            option.innerText = i18n(e) + ' (' + list.reduce((c, x) => c + ~~(e === 'All' || x.type === e), 0) + ')';
            if (e === type) { option.selected = true; }
            select.appendChild(option);
        });

        select.addEventListener('change', e => {
            collection.removeAll();
            filterCollection(collection, list, e.target.value);
            Ymap.setBounds(collection.getBounds());
        });

        const labels = document.querySelector('#showLabels');

        labels.addEventListener('change', e => {
            list.forEach(({line}) => {
                if (!e.target.checked) {
                    line.properties.setAll({
                        _hintContent: line.properties.getAll().hintContent,
                        hintContent: ''
                    });
                } else {
                    line.properties.setAll({
                        hintContent: line.properties.getAll()._hintContent,
                    });
                }
            });
        });
    });
} else {
    location.href = 'https://www.strava.com/oauth/authorize?' + [{
        client_id: 29536,
        redirect_uri: location.href.split('?')[0],
        response_type: 'code',
        scope: 'read,activity:read_all,profile:read_all,read_all'
    }]
    .reduce((x,o)=>(Object.entries(o)), 0)
    .map(([k,e])=>k+'='+e)
    .join('&')
}