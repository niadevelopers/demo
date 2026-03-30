
    const _0x6107cf = _0x22ab;
(function(_0x9b9f39, _0x127989) {
    const _0x3549d9 = _0x22ab,
        _0xe5ffad = _0x9b9f39();
    while (!![]) {
        try {
            const _0x45f408 = -parseInt(_0x3549d9(0x193)) / 0x1 + -parseInt(_0x3549d9(0x263)) / 0x2 + parseInt(_0x3549d9(0x2a6)) / 0x3 * (parseInt(_0x3549d9(0xdc)) / 0x4) + -parseInt(_0x3549d9(0x176)) / 0x5 * (parseInt(_0x3549d9(0xba)) / 0x6) + parseInt(_0x3549d9(0x1d1)) / 0x7 * (-parseInt(_0x3549d9(0x155)) / 0x8) + parseInt(_0x3549d9(0x23b)) / 0x9 * (parseInt(_0x3549d9(0x1c7)) / 0xa) + -parseInt(_0x3549d9(0xf8)) / 0xb * (-parseInt(_0x3549d9(0x184)) / 0xc);
            if (_0x45f408 === _0x127989) break;
            else _0xe5ffad['push'](_0xe5ffad['shift']());
        } catch (_0x2b5b0f) {
            _0xe5ffad['push'](_0xe5ffad['shift']());
        }
    }
}(_0x3540, 0x3edcb));
const DEMO_LIMIT = 0xa,
    STORAGE_KEY = 'travis_demo_v1';
let state = {
        'user': null,
        'transactions': [],
        'obligations': []
    },
    travisMemory = {
        'conversationCount': 0x0
    };

function persist() {
    const _0x50e182 = _0x22ab;
    localStorage[_0x50e182(0x229)](STORAGE_KEY, JSON[_0x50e182(0x235)](state));
}

function loadState() {
    const _0x6cd9dd = _0x22ab;
    try {
        const _0xdc9173 = localStorage[_0x6cd9dd(0x11f)](STORAGE_KEY);
        _0xdc9173 && (state = JSON['parse'](_0xdc9173));
    } catch (_0x48788f) {}
}

function hardReset() {
    const _0x28bc76 = _0x22ab;
    localStorage[_0x28bc76(0xff)](STORAGE_KEY), location[_0x28bc76(0x109)]();
}

function checkDead() {
    const _0x21bf1e = _0x22ab;
    return state[_0x21bf1e(0x190)][_0x21bf1e(0x1da)] >= DEMO_LIMIT && (document['getElementById'](_0x21bf1e(0x21a))[_0x21bf1e(0xdb)][_0x21bf1e(0x200)](_0x21bf1e(0xc7)), !0x0);
}

function updateTxCounter() {
    const _0x5a7bb6 = _0x22ab,
        _0x5dd56a = state[_0x5a7bb6(0x190)][_0x5a7bb6(0x1da)],
        _0x39dd83 = document[_0x5a7bb6(0x213)](_0x5a7bb6(0xd8));
    _0x39dd83['textContent'] = _0x5dd56a + _0x5a7bb6(0xb3) + DEMO_LIMIT + _0x5a7bb6(0x170), _0x39dd83['className'] = _0x5a7bb6(0x236) + (_0x5dd56a >= DEMO_LIMIT ? _0x5a7bb6(0x230) : _0x5dd56a >= 0x7 ? _0x5a7bb6(0x140) : 'chip-blue');
}

function updateClock() {
    const _0x4c68fb = _0x22ab,
        _0x2f0404 = new Date();
    document['getElementById'](_0x4c68fb(0x169))['textContent'] = _0x2f0404[_0x4c68fb(0x2a7)](_0x4c68fb(0x197), {
        'hour': _0x4c68fb(0x237),
        'minute': _0x4c68fb(0x237)
    }), document['getElementById'](_0x4c68fb(0x21d))['textContent'] = _0x2f0404[_0x4c68fb(0x14a)](_0x4c68fb(0x197), {
        'weekday': _0x4c68fb(0xb1),
        'day': _0x4c68fb(0x289),
        'month': _0x4c68fb(0xb1)
    });
}

function toggleMobileSidebar() {
    const _0x578820 = _0x22ab;
    document['getElementById'](_0x578820(0x17a))[_0x578820(0xdb)][_0x578820(0x24c)](_0x578820(0x130));
}

function showCustomAlert(_0x1bbb23, _0x412b31 = null) {
    const _0x5796b6 = _0x22ab,
        _0x125363 = document[_0x5796b6(0x213)](_0x5796b6(0x1bb));
    document[_0x5796b6(0x213)](_0x5796b6(0x181))['innerHTML'] = _0x1bbb23, _0x125363[_0x5796b6(0x1bc)][_0x5796b6(0x16f)] = _0x5796b6(0x182);
    const _0x2a9c5f = document[_0x5796b6(0x213)](_0x5796b6(0x1ff)),
        _0x29c2e7 = _0x2a9c5f['cloneNode'](!0x0);
    _0x2a9c5f[_0x5796b6(0x13b)][_0x5796b6(0x17f)](_0x29c2e7, _0x2a9c5f), _0x29c2e7[_0x5796b6(0xa5)]('click', () => {
        const _0x3b3d2c = _0x5796b6;
        _0x125363['style'][_0x3b3d2c(0x16f)] = _0x3b3d2c(0x172), _0x412b31 && _0x412b31();
    });
}

function isLiquid(_0x14ac1e) {
    const _0x27de04 = _0x22ab;
    return !!_0x14ac1e && [_0x27de04(0x14d), _0x27de04(0x203), _0x27de04(0xf2), _0x27de04(0x29d), _0x27de04(0x209), 'Petty\x20Cash', _0x27de04(0x159)]['includes'](_0x14ac1e);
}

function getBalance(_0x1730fc) {
    const _0x2fc1a9 = _0x22ab;
    let _0x2ad28b = 0x0;
    return state[_0x2fc1a9(0x190)][_0x2fc1a9(0x153)](_0x4f3462 => {
        const _0x30df75 = _0x2fc1a9;
        _0x4f3462[_0x30df75(0x23a)] === _0x1730fc && (_0x2ad28b += _0x4f3462[_0x30df75(0x21c)]), _0x4f3462['credit'] === _0x1730fc && (_0x2ad28b -= _0x4f3462[_0x30df75(0x21c)]);
    }), [_0x2fc1a9(0x14d), _0x2fc1a9(0x203), _0x2fc1a9(0xf2), _0x2fc1a9(0x29d), _0x2fc1a9(0x209), 'Petty\x20Cash', _0x2fc1a9(0x159), 'Inventory', _0x2fc1a9(0xa7)]['includes'](_0x1730fc) ? _0x2ad28b : -_0x2ad28b;
}

function getFin() {
    const _0x1596f7 = _0x22ab,
        _0x2ff661 = new Date(),
        _0x2f4c97 = Math[_0x1596f7(0x23f)](0x1, new Date(_0x2ff661[_0x1596f7(0x227)](), _0x2ff661[_0x1596f7(0x274)]() + 0x1, 0x0)[_0x1596f7(0xdf)]() - _0x2ff661[_0x1596f7(0xdf)]());
    let _0x16f45a = 0x0;
    ['Cash', _0x1596f7(0x203), _0x1596f7(0xf2), _0x1596f7(0x29d), 'Bank\x20/\x20M-Pesa', _0x1596f7(0x12c), 'Accounts\x20Receivable'][_0x1596f7(0x153)](_0x44382a => _0x16f45a += getBalance(_0x44382a));
    const _0x2266f3 = state[_0x1596f7(0x24b)][_0x1596f7(0xc4)](_0x49aad9 => {
            const _0x543d40 = _0x1596f7;
            let _0x46b52e = 0x0;
            return state[_0x543d40(0x190)][_0x543d40(0x153)](_0x4b3d4e => {
                const _0x43a651 = _0x543d40;
                new Date(_0x4b3d4e['id'])[_0x43a651(0x274)]() !== _0x2ff661[_0x43a651(0x274)]() || !_0x4b3d4e[_0x43a651(0xb8)]['toLowerCase']()[_0x43a651(0x154)](_0x49aad9['label'][_0x43a651(0x18b)]()) && _0x4b3d4e[_0x43a651(0x131)] !== _0x49aad9[_0x43a651(0x161)] || (_0x46b52e += _0x4b3d4e[_0x43a651(0x21c)]);
            }), {
                ..._0x49aad9,
                'paid': _0x46b52e,
                'pending': Math[_0x543d40(0x23f)](0x0, _0x49aad9['amount'] - _0x46b52e),
                'variance': _0x46b52e - _0x49aad9['amount']
            };
        }),
        _0x584102 = _0x2266f3[_0x1596f7(0x108)]((_0x217bc8, _0x2619e7) => _0x217bc8 + _0x2619e7[_0x1596f7(0x1f4)], 0x0),
        _0x68832c = _0x16f45a - _0x584102;
    return {
        'liquid': _0x16f45a,
        'pending': _0x584102,
        'safeCash': _0x68832c,
        'daysRem': _0x2f4c97,
        'obsStatus': _0x2266f3,
        'daily': _0x68832c / _0x2f4c97
    };
}

function calculateInsolvencyRisk() {
    const _0x1d8f80 = _0x22ab,
        _0x3dec39 = getFin(),
        _0x1b6dd0 = new Date(),
        _0x369de3 = new Date();
    _0x369de3[_0x1d8f80(0x123)](_0x1b6dd0[_0x1d8f80(0xdf)]() - 0x7);
    let _0x5adaf2 = 0x0;
    state[_0x1d8f80(0x190)][_0x1d8f80(0x153)](_0x14d754 => {
        const _0x189c0c = _0x1d8f80;
        new Date(_0x14d754['id']) >= _0x369de3 && isLiquid(_0x14d754[_0x189c0c(0x131)]) && (_0x5adaf2 += _0x14d754['amount']);
    });
    const _0x4d9bb3 = _0x5adaf2 / 0x7;
    return _0x4d9bb3 <= _0x3dec39[_0x1d8f80(0x16c)] ? {
        'score': 0x5,
        'label': 'LOW',
        'color': _0x1d8f80(0xc5)
    } : _0x4d9bb3 < 1.5 * _0x3dec39[_0x1d8f80(0x16c)] ? {
        'score': 0x2d,
        'label': _0x1d8f80(0x24d),
        'color': _0x1d8f80(0x164)
    } : {
        'score': 0x55,
        'label': 'CRITICAL',
        'color': _0x1d8f80(0x180)
    };
}

function getStatusSummary() {
    const _0x17cdab = _0x22ab,
        _0x5686e5 = getFin(),
        _0x2564fe = calculateInsolvencyRisk();
    return {
        'cash': Math[_0x17cdab(0x13e)](_0x5686e5[_0x17cdab(0x1a5)]),
        'dailyCap': Math[_0x17cdab(0x257)](_0x5686e5['daily']),
        'daysRem': _0x5686e5[_0x17cdab(0x25c)],
        'riskLabel': _0x2564fe[_0x17cdab(0x161)],
        'riskColor': _0x2564fe[_0x17cdab(0xef)],
        'riskScore': _0x2564fe[_0x17cdab(0x1d7)]
    };
}

function _0x22ab(_0x1e282e, _0x1ca9bd) {
    _0x1e282e = _0x1e282e - 0xa5;
    const _0x3540ad = _0x3540();
    let _0x22ab8b = _0x3540ad[_0x1e282e];
    return _0x22ab8b;
}

function updateLiveHud() {
    const _0x7d2a1f = _0x22ab,
        _0x2d8fcf = parseFloat(document['getElementById'](_0x7d2a1f(0x106))[_0x7d2a1f(0x1fa)]) || 0x0,
        _0x5b6ab1 = document['getElementById']('tx-credit')[_0x7d2a1f(0x1fa)],
        _0x55285d = getFin(),
        _0xfbbcc1 = (isLiquid(_0x5b6ab1) ? _0x55285d[_0x7d2a1f(0x1a5)] - _0x2d8fcf : _0x55285d[_0x7d2a1f(0x1a5)]) / _0x55285d['daysRem'];
    document['getElementById'](_0x7d2a1f(0x260))[_0x7d2a1f(0x1f1)] = _0x7d2a1f(0x135) + _0xfbbcc1['toFixed'](0x0), document[_0x7d2a1f(0x213)](_0x7d2a1f(0xb2))[_0x7d2a1f(0x1f1)] = _0x7d2a1f(0x135) + _0x55285d['pending'][_0x7d2a1f(0x1af)]() + _0x7d2a1f(0x282), document[_0x7d2a1f(0x213)](_0x7d2a1f(0x27b))['style'][_0x7d2a1f(0x16f)] = isLiquid(_0x5b6ab1) && _0x2d8fcf > _0x55285d[_0x7d2a1f(0x16c)] ? _0x7d2a1f(0xbc) : 'none';
}

function updateHeader(_0x12b8dd) {
    const _0x363b0d = _0x22ab;
    updateTxCounter();
    const _0x5a837b = document[_0x363b0d(0x213)](_0x363b0d(0x299));
    _0x5a837b['style'][_0x363b0d(0xe4)] = window['innerWidth'] < 0x258 ? _0x363b0d(0x17e) : _0x363b0d(0x1ea), _0x5a837b['innerHTML'] = [{
        'label': _0x363b0d(0x196),
        'value': _0x363b0d(0x135) + _0x12b8dd['liquid'][_0x363b0d(0x1af)](),
        'color': '#0078D4',
        'icon': '💰'
    }, {
        'label': _0x363b0d(0x272),
        'value': _0x363b0d(0x135) + _0x12b8dd[_0x363b0d(0x1f4)][_0x363b0d(0x1af)](),
        'color': _0x363b0d(0x180),
        'icon': '📋'
    }, {
        'label': 'Survival\x20Window',
        'value': _0x12b8dd[_0x363b0d(0x25c)] + _0x363b0d(0x14f),
        'color': _0x363b0d(0xc5),
        'icon': '📅'
    }, {
        'label': _0x363b0d(0xfa),
        'value': _0x363b0d(0x135) + Math[_0x363b0d(0x23f)](0x0, _0x12b8dd[_0x363b0d(0x16c)])['toFixed'](0x0),
        'color': _0x363b0d(0x124),
        'icon': '📊'
    }][_0x363b0d(0xc4)](_0x44f238 => _0x363b0d(0xd4) + _0x44f238[_0x363b0d(0xef)] + ';\x22></div><div\x20class=\x22metric-label\x22>' + _0x44f238[_0x363b0d(0x23e)] + '\x20' + _0x44f238['label'] + _0x363b0d(0x1dd) + _0x44f238[_0x363b0d(0x1fa)] + _0x363b0d(0x1db))[_0x363b0d(0x1e6)]('');
    const _0x5112eb = document['getElementById'](_0x363b0d(0xd6));
    _0x5112eb[_0x363b0d(0x280)] = _0x12b8dd[_0x363b0d(0x1a5)] < 0x0 ? _0x363b0d(0x13a) : _0x363b0d(0x199), _0x5112eb[_0x363b0d(0x1e4)] = _0x12b8dd[_0x363b0d(0x1a5)] < 0x0 ? '⚠\x20INSOLVENT' : _0x363b0d(0x20f);
}

function navClick(_0x120bcb) {
    const _0xdf5993 = _0x22ab;
    document[_0xdf5993(0x1e3)]('.nav-item')[_0xdf5993(0x153)](_0x3d86a0 => _0x3d86a0[_0xdf5993(0xdb)][_0xdf5993(0x18d)]('active'));
    const _0x578222 = document[_0xdf5993(0x213)]('nav-' + _0x120bcb);
    _0x578222 && _0x578222[_0xdf5993(0xdb)][_0xdf5993(0x200)](_0xdf5993(0x133)), document[_0xdf5993(0x1e3)](_0xdf5993(0x110))['forEach'](_0x479998 => _0x479998[_0xdf5993(0xdb)][_0xdf5993(0x18d)](_0xdf5993(0x133))), document[_0xdf5993(0x213)](_0xdf5993(0x17a))[_0xdf5993(0xdb)]['remove'](_0xdf5993(0x130)), nav(_0x120bcb);
}

function nav(_0x3b6140) {
    const _0x2105d9 = _0x22ab,
        _0x31f92c = document[_0x2105d9(0x213)](_0x2105d9(0x288)),
        _0x9db419 = getFin();
    if (updateHeader(_0x9db419), _0x2105d9(0x254) === _0x3b6140) {
        const _0x11eb4c = calculateInsolvencyRisk(),
            _0x45fe2d = _0x9db419['obsStatus']['filter'](_0x592328 => _0x592328['variance'] > 0x0),
            _0x3ef28c = _0x2105d9(0xcf) === _0x11eb4c['label'] ? _0x2105d9(0x269) : _0x2105d9(0x24d) === _0x11eb4c['label'] ? _0x2105d9(0x140) : 'chip-red';
        _0x31f92c[_0x2105d9(0xfc)] = '<div\x20style=\x22display:grid;grid-template-columns:' + (window[_0x2105d9(0x1c2)] < 0x384 ? _0x2105d9(0x100) : _0x2105d9(0x166)) + _0x2105d9(0xaf) + _0x3ef28c + _0x2105d9(0x26d) + _0x11eb4c[_0x2105d9(0xef)] + _0x2105d9(0x148) + _0x11eb4c[_0x2105d9(0x161)] + '</span></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:11px;color:var(--win-text-3);margin-bottom:8px;\x22>Based\x20on\x207-day\x20velocity\x20vs\x20projected\x20ceiling</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress-track\x22\x20style=\x22height:6px;margin-bottom:8px;\x22><div\x20class=\x22progress-fill\x22\x20style=\x22width:' + _0x11eb4c[_0x2105d9(0x1d7)] + _0x2105d9(0xd2) + _0x11eb4c[_0x2105d9(0xef)] + ';\x22></div></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;justify-content:space-between;font-size:10px;color:var(--win-text-3);\x22><span>Low</span><span>Moderate</span><span>Critical</span></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-header\x22><div\x20class=\x22win-card-title\x22>Leak\x20Finder</div>' + (_0x45fe2d[_0x2105d9(0x1da)] > 0x0 ? _0x2105d9(0x1ac) + _0x45fe2d['length'] + _0x2105d9(0x127) + (_0x45fe2d[_0x2105d9(0x1da)] > 0x1 ? 's' : '') + '</span>' : _0x2105d9(0xe7)) + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-body\x22\x20style=\x22padding-top:0;\x22>' + (_0x45fe2d['length'] > 0x0 ? _0x45fe2d[_0x2105d9(0xc4)](_0xf43039 => _0x2105d9(0x25b) + _0xf43039[_0x2105d9(0x161)] + _0x2105d9(0x2ae) + _0xf43039[_0x2105d9(0x21c)][_0x2105d9(0x1af)]() + '</div></div><div\x20style=\x22text-align:right;\x22><div\x20style=\x22color:var(--win-red);font-size:13px;font-weight:700;\x22>+KSh\x20' + _0xf43039[_0x2105d9(0x14c)][_0x2105d9(0x1af)]() + '</div><div\x20style=\x22font-size:10px;color:var(--win-red);\x22>Over\x20budget</div></div></div>')[_0x2105d9(0x1e6)]('') : '<div\x20style=\x22padding:8px\x200;text-align:center;color:var(--win-text-3);font-size:13px;\x22>No\x20budget\x20variances\x20detected</div>') + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-header\x22><div\x20class=\x22win-card-title\x22>Disposable\x20Buffer</div></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-body\x22><div\x20style=\x22font-size:28px;font-weight:700;color:' + (_0x9db419['safeCash'] < 0x0 ? _0x2105d9(0x27e) : _0x2105d9(0x15a)) + ';\x22>KSh\x20' + _0x9db419[_0x2105d9(0x1a5)][_0x2105d9(0x1af)]() + '</div><div\x20style=\x22font-size:11px;color:var(--win-text-3);margin-top:4px;\x22>Available\x20after\x20all\x20obligations</div></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card\x22\x20style=\x22min-height:340px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-header\x22><div\x20class=\x22win-card-title\x22>Performance\x20Analytics</div><div\x20style=\x22font-size:11px;color:var(--win-text-3);\x22>Last\x207\x20days</div></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-body\x22\x20style=\x22height:300px;\x22><canvas\x20id=\x22analyticsChart\x22></canvas></div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>', setTimeout(renderChart, 0x50);
    }
    if ('obs' === _0x3b6140) {
        const _0x32c2b3 = _0x9db419[_0x2105d9(0x1f2)]['map'](_0x412d3d => _0x2105d9(0x20b) + _0x412d3d['label'] + _0x2105d9(0x2ae) + _0x412d3d[_0x2105d9(0x21c)][_0x2105d9(0x1af)]() + _0x2105d9(0x105) + _0x412d3d[_0x2105d9(0x1dc)]['toLocaleString']() + '</div><div\x20style=\x22margin-top:6px;\x22><div\x20class=\x22progress-track\x22\x20style=\x22height:4px;width:120px;\x22><div\x20class=\x22progress-fill\x22\x20style=\x22width:' + Math[_0x2105d9(0xc3)](0x64, _0x412d3d[_0x2105d9(0x21c)] > 0x0 ? _0x412d3d[_0x2105d9(0x1dc)] / _0x412d3d[_0x2105d9(0x21c)] * 0x64 : 0x0) + _0x2105d9(0xd2) + (_0x412d3d[_0x2105d9(0x1f4)] <= 0x0 ? _0x2105d9(0xc5) : '#0078D4') + ';\x22></div></div></div></div><div\x20style=\x22text-align:right;\x22>' + (_0x412d3d[_0x2105d9(0x1f4)] <= 0x0 ? '<span\x20class=\x22chip\x20chip-green\x22>✓\x20Settled</span>' : _0x2105d9(0xfb) + _0x412d3d[_0x2105d9(0x1f4)][_0x2105d9(0x1af)]() + _0x2105d9(0x122)) + (_0x412d3d[_0x2105d9(0x14c)] > 0x0 ? '<div\x20style=\x22font-size:10px;color:var(--win-red);font-weight:700;margin-top:2px;\x22>+' + _0x412d3d['variance']['toLocaleString']() + _0x2105d9(0x28e) : '') + _0x2105d9(0x1db))[_0x2105d9(0x1e6)]('');
        _0x31f92c[_0x2105d9(0xfc)] = _0x2105d9(0x1c4) + (_0x32c2b3 || '<div\x20style=\x22padding:24px;text-align:center;color:var(--win-text-3);\x22>No\x20obligations\x20configured.</div>') + _0x2105d9(0x22a);
    }
    if (_0x2105d9(0x1b6) === _0x3b6140 && (_0x31f92c[_0x2105d9(0xfc)] = _0x2105d9(0x1ca), document[_0x2105d9(0x213)](_0x2105d9(0x1df))[_0x2105d9(0xa5)](_0x2105d9(0x171), _0x5ea4be => {
            const _0x1caff5 = _0x2105d9;
            'Enter' === _0x5ea4be[_0x1caff5(0xd1)] && handleAsk();
        })), 'book' === _0x3b6140) {
        const _0x12554d = state[_0x2105d9(0x190)][_0x2105d9(0xc4)](_0x548aa4 => _0x2105d9(0xcb) + new Date(_0x548aa4['id'])['toLocaleDateString']('en-KE') + _0x2105d9(0x136) + _0x548aa4[_0x2105d9(0xb8)] + _0x2105d9(0x255) + _0x548aa4['debit'] + '</span><span\x20style=\x22color:var(--win-text-3);font-size:10px;\x22>→</span><span\x20class=\x22chip\x20chip-red\x22\x20style=\x22font-size:10px;\x22>' + _0x548aa4[_0x2105d9(0x131)] + _0x2105d9(0xf3) + _0x548aa4[_0x2105d9(0x21c)][_0x2105d9(0x1af)]() + '</td><td\x20style=\x22text-align:right;font-family:monospace;color:var(--win-red);font-weight:600;white-space:nowrap;\x22>-' + _0x548aa4[_0x2105d9(0x21c)]['toLocaleString']() + _0x2105d9(0x1e2))[_0x2105d9(0x1e6)]('');
        _0x31f92c['innerHTML'] = '<div\x20class=\x22win-card\x22><div\x20class=\x22win-card-header\x22><div\x20class=\x22win-card-title\x22>General\x20Ledger</div><div\x20style=\x22font-size:11px;color:var(--win-text-3);\x22>' + state[_0x2105d9(0x190)][_0x2105d9(0x1da)] + _0x2105d9(0x1a0) + (_0x12554d || _0x2105d9(0x1aa)) + _0x2105d9(0x20d);
    }
    _0x2105d9(0x286) === _0x3b6140 && (_0x31f92c[_0x2105d9(0xfc)] = _0x2105d9(0x157) + (state[_0x2105d9(0x17c)]?.[_0x2105d9(0x202)] || '—') + _0x2105d9(0xce) + (state[_0x2105d9(0x17c)]?.[_0x2105d9(0x29c)] || '—') + _0x2105d9(0xc1) + state[_0x2105d9(0x190)][_0x2105d9(0x1da)] + _0x2105d9(0xb3) + DEMO_LIMIT + '</strong></div></div><div\x20class=\x22setup-step\x22><div\x20class=\x22setup-step-title\x22>🗂\x20Demo\x20Data</div><div\x20style=\x22display:flex;flex-wrap:wrap;gap:8px;\x22><button\x20onclick=\x22hardReset()\x22\x20class=\x22btn-secondary\x22\x20style=\x22color:var(--win-red);border-color:rgba(196,43,28,0.3);\x22>Reset\x20Demo</button></div><div\x20style=\x22font-size:11px;color:var(--win-text-3);margin-top:8px;\x22>Resetting\x20clears\x20all\x20transactions\x20and\x20profile\x20data\x20from\x20this\x20browser.</div></div></div></div>');
}

function renderChart() {
    const _0x4d9250 = _0x22ab,
        _0x1335dc = document['getElementById'](_0x4d9250(0x137))?.[_0x4d9250(0x1c6)]('2d');
    if (!_0x1335dc) return;
    const _0x32fa13 = getFin(),
        _0x3170e0 = new Date();
    let _0x3d76ad = [],
        _0x555cbc = [],
        _0x56966d = [],
        _0x341703 = [];
    for (let _0x31781b = 0x6; _0x31781b >= 0x0; _0x31781b--) {
        const _0x27b94c = new Date();
        _0x27b94c[_0x4d9250(0x123)](_0x3170e0[_0x4d9250(0xdf)]() - _0x31781b), _0x3d76ad['push'](_0x27b94c[_0x4d9250(0x14a)]('en-KE', {
            'weekday': _0x4d9250(0xb1)
        }));
        let _0x32bd99 = 0x0,
            _0x3a5fd5 = 0x0;
        state[_0x4d9250(0x190)][_0x4d9250(0x153)](_0x4e7770 => {
            const _0x3dba67 = _0x4d9250;
            new Date(_0x4e7770['id'])[_0x3dba67(0x147)]() === _0x27b94c[_0x3dba67(0x147)]() && (isLiquid(_0x4e7770[_0x3dba67(0x131)]) && (_0x32bd99 += _0x4e7770[_0x3dba67(0x21c)]), isLiquid(_0x4e7770[_0x3dba67(0x23a)]) && (_0x3a5fd5 += _0x4e7770[_0x3dba67(0x21c)]));
        }), _0x555cbc[_0x4d9250(0x1e5)](_0x32bd99), _0x56966d[_0x4d9250(0x1e5)](_0x3a5fd5), _0x341703['push'](Math[_0x4d9250(0x23f)](0x0, _0x32fa13['daily']));
    }
    window[_0x4d9250(0x24f)] && window['travisChart'][_0x4d9250(0x222)](), window['travisChart'] = new Chart(_0x1335dc, {
        'type': 'line',
        'data': {
            'labels': _0x3d76ad,
            'datasets': [{
                'label': _0x4d9250(0xfa),
                'data': _0x341703,
                'borderColor': _0x4d9250(0xac),
                'borderDash': [0x6, 0x3],
                'pointRadius': 0x0,
                'fill': !0x1,
                'borderWidth': 0x2
            }, {
                'label': _0x4d9250(0x277),
                'data': _0x555cbc,
                'borderColor': _0x4d9250(0x180),
                'backgroundColor': 'rgba(196,43,28,0.08)',
                'fill': !0x0,
                'tension': 0.4,
                'borderWidth': 0x2,
                'pointBackgroundColor': _0x4d9250(0x180),
                'pointRadius': 0x3
            }, {
                'label': 'Revenue',
                'data': _0x56966d,
                'borderColor': _0x4d9250(0xc5),
                'backgroundColor': 'rgba(16,124,16,0.08)',
                'fill': !0x0,
                'tension': 0.4,
                'borderWidth': 0x2,
                'pointBackgroundColor': _0x4d9250(0xc5),
                'pointRadius': 0x3
            }]
        },
        'options': {
            'responsive': !0x0,
            'maintainAspectRatio': !0x1,
            'plugins': {
                'legend': {
                    'labels': {
                        'color': _0x4d9250(0x232),
                        'font': {
                            'size': 0xb,
                            'family': _0x4d9250(0xae)
                        },
                        'boxWidth': 0x14
                    }
                }
            },
            'scales': {
                'x': {
                    'grid': {
                        'color': _0x4d9250(0x1cb)
                    },
                    'ticks': {
                        'color': _0x4d9250(0x10a),
                        'font': {
                            'size': 0xa
                        }
                    }
                },
                'y': {
                    'grid': {
                        'color': _0x4d9250(0x1cb)
                    },
                    'ticks': {
                        'color': '#8a8a8a',
                        'font': {
                            'size': 0xa
                        }
                    },
                    'beginAtZero': !0x0
                }
            }
        }
    });
}

function showTxModal() {
    const _0x3da446 = _0x22ab;
    if (checkDead()) return;
    const _0x53f24b = DEMO_LIMIT - state[_0x3da446(0x190)][_0x3da446(0x1da)];
    document[_0x3da446(0x213)](_0x3da446(0x150))[_0x3da446(0x1e4)] = state[_0x3da446(0x190)][_0x3da446(0x1da)] + '\x20/\x20' + DEMO_LIMIT;
    const _0x2a3e55 = document['getElementById'](_0x3da446(0x125));
    _0x53f24b <= 0x3 && _0x53f24b > 0x0 ? (_0x2a3e55['style'][_0x3da446(0x16f)] = _0x3da446(0xbc), _0x2a3e55[_0x3da446(0x1e4)] = '⚠\x20' + _0x53f24b + _0x3da446(0x163) + (0x1 === _0x53f24b ? '' : 's') + '\x20remaining\x20in\x20demo') : _0x2a3e55['style'][_0x3da446(0x16f)] = _0x3da446(0x172);
    const _0x5dab5f = document[_0x3da446(0x213)](_0x3da446(0x19e)),
        _0xfcd48e = document[_0x3da446(0x213)](_0x3da446(0xad));
    _0x5dab5f[_0x3da446(0xfc)] = _0xfcd48e[_0x3da446(0xfc)] = '';
    const _0x31ef30 = (_0x51aa07, _0x1fa186, _0x17423e) => {
        const _0x34e6c4 = _0x3da446,
            _0x476f95 = document[_0x34e6c4(0xb6)](_0x34e6c4(0x215));
        return _0x476f95['label'] = '●\x20' + _0x51aa07, _0x476f95['style'][_0x34e6c4(0xef)] = _0x1fa186, _0x17423e[_0x34e6c4(0x153)](_0x5dce1e => _0x476f95[_0x34e6c4(0x258)](new Option(_0x5dce1e, _0x5dce1e))), _0x476f95;
    };
    _0x3da446(0x138) === state['user']['type'] ? [_0x5dab5f, _0xfcd48e][_0x3da446(0x153)](_0x596b57 => {
        const _0x2cf879 = _0x3da446;
        _0x596b57['appendChild'](_0x31ef30(_0x2cf879(0x212), _0x2cf879(0xc5), ['Cash', _0x2cf879(0x203), _0x2cf879(0xf2), _0x2cf879(0x29d)])), _0x596b57[_0x2cf879(0x258)](_0x31ef30('INCOME', '#107C10', [_0x2cf879(0x1ef), _0x2cf879(0x12f), _0x2cf879(0x243), _0x2cf879(0x10c), _0x2cf879(0x144)])), _0x596b57[_0x2cf879(0x258)](_0x31ef30(_0x2cf879(0x10f), _0x2cf879(0x164), [_0x2cf879(0x15d), _0x2cf879(0x29a), _0x2cf879(0x28f), _0x2cf879(0x24e), _0x2cf879(0x204), _0x2cf879(0x29e)])), _0x596b57['appendChild'](_0x31ef30(_0x2cf879(0xe2), _0x2cf879(0x180), ['Entertainment', _0x2cf879(0x20c), _0x2cf879(0x14e), _0x2cf879(0x26e)])), _0x596b57[_0x2cf879(0x258)](_0x31ef30('LIABILITIES', _0x2cf879(0xac), [_0x2cf879(0x126), _0x2cf879(0x242)]));
    }) : [_0x5dab5f, _0xfcd48e][_0x3da446(0x153)](_0x329ebe => {
        const _0x420f73 = _0x3da446;
        _0x329ebe['appendChild'](_0x31ef30(_0x420f73(0x212), _0x420f73(0xc5), [_0x420f73(0x209), _0x420f73(0x12c), _0x420f73(0x159), _0x420f73(0x113), _0x420f73(0xa7)])), _0x329ebe[_0x420f73(0x258)](_0x31ef30('REVENUE', _0x420f73(0xc5), [_0x420f73(0x1ed), 'Service\x20Revenue', _0x420f73(0x2a2)])), _0x329ebe[_0x420f73(0x258)](_0x31ef30(_0x420f73(0x187), _0x420f73(0x164), [_0x420f73(0x29a), 'Payroll', 'Utilities', _0x420f73(0x246), _0x420f73(0x1f7), 'Office\x20Supplies'])), _0x329ebe['appendChild'](_0x31ef30('DISCRETIONARY\x20EXPENSES', '#C42B1C', [_0x420f73(0xb7), 'Travel\x20&\x20Entertainment', 'Professional\x20Fees\x20(if\x20not\x20critical)'])), _0x329ebe[_0x420f73(0x258)](_0x31ef30(_0x420f73(0x1e7), '#0078D4', [_0x420f73(0x1fc), _0x420f73(0x23d)]));
    }), document[_0x3da446(0x213)](_0x3da446(0x2ac))['classList'][_0x3da446(0x200)](_0x3da446(0xc7)), updateLiveHud();
}

function closeTxModal() {
    const _0x3e520b = _0x22ab;
    document['getElementById'](_0x3e520b(0x2ac))[_0x3e520b(0xdb)]['remove'](_0x3e520b(0xc7)), document['getElementById'](_0x3e520b(0x106))[_0x3e520b(0x1fa)] = '';
}

function commitTransaction() {
    const _0x488ea9 = _0x22ab;
    if (state['transactions'][_0x488ea9(0x1da)] >= DEMO_LIMIT) return closeTxModal(), void checkDead();
    const _0x7d0e0 = parseFloat(document['getElementById']('tx-amount')[_0x488ea9(0x1fa)]),
        _0x4e95ec = document['getElementById'](_0x488ea9(0x19e))['value'],
        _0x30a4f4 = document[_0x488ea9(0x213)]('tx-credit')[_0x488ea9(0x1fa)],
        _0x2ee2cf = document[_0x488ea9(0x213)]('tx-desc')[_0x488ea9(0x1fa)] || 'Market\x20Exchange';
    if (_0x4e95ec === _0x30a4f4 || isNaN(_0x7d0e0) || _0x7d0e0 <= 0x0) return showCustomAlert(_0x488ea9(0x19c));
    state['transactions']['unshift']({
        'id': Date['now'](),
        'debit': _0x4e95ec,
        'credit': _0x30a4f4,
        'amount': _0x7d0e0,
        'desc': _0x2ee2cf
    }), persist(), closeTxModal(), checkDead() || navClick(_0x488ea9(0x254));
}

function addObligationRow(_0x3d7a3d = '', _0x4ec28c = '') {
    const _0x346838 = _0x22ab,
        _0x213d91 = document[_0x346838(0xb6)](_0x346838(0x168));
    _0x213d91[_0x346838(0x1bc)]['cssText'] = _0x346838(0x21e), _0x213d91[_0x346838(0xfc)] = _0x346838(0x239) + _0x3d7a3d + _0x346838(0xd0) + _0x4ec28c + _0x346838(0x1c5), document[_0x346838(0x213)](_0x346838(0x266))[_0x346838(0x258)](_0x213d91);
}

function setUserType(_0x57372c) {
    const _0x4bd6c4 = _0x22ab;
    state[_0x4bd6c4(0x107)] = _0x57372c, document[_0x4bd6c4(0x213)](_0x4bd6c4(0x251))['className'] = 'seg-btn' + (_0x4bd6c4(0x138) === _0x57372c ? '\x20active' : ''), document['getElementById'](_0x4bd6c4(0x128))[_0x4bd6c4(0x280)] = _0x4bd6c4(0x1ee) + (_0x4bd6c4(0x19f) === _0x57372c ? _0x4bd6c4(0x223) : '');
}

function finalizeSetup() {
    const _0x1c6b3c = _0x22ab,
        _0x3cad30 = document['getElementById'](_0x1c6b3c(0x188))[_0x1c6b3c(0x1fa)]['trim'](),
        _0x46e34b = Array[_0x1c6b3c(0x12b)](document[_0x1c6b3c(0x1e3)]('#obligation-list\x20>\x20div'))[_0x1c6b3c(0xc4)](_0x4217fc => ({
            'label': _0x4217fc[_0x1c6b3c(0x1e3)](_0x1c6b3c(0x18a))[0x0][_0x1c6b3c(0x1fa)],
            'amount': parseFloat(_0x4217fc[_0x1c6b3c(0x1e3)]('input')[0x1][_0x1c6b3c(0x1fa)]) || 0x0
        }))['filter'](_0x20e453 => _0x20e453[_0x1c6b3c(0x161)]);
    if (!_0x3cad30 || !state[_0x1c6b3c(0x107)]) return showCustomAlert(_0x1c6b3c(0x143));
    state[_0x1c6b3c(0x17c)] = {
        'name': _0x3cad30,
        'type': state['tempType']
    }, state['obligations'] = _0x46e34b, persist(), location[_0x1c6b3c(0x109)]();
}

function showHelpModal() {
    const _0x157140 = _0x22ab;
    document[_0x157140(0x213)](_0x157140(0x206))[_0x157140(0x1bc)][_0x157140(0x16f)] = _0x157140(0x182);
}

function closeHelpModal() {
    const _0x3ee203 = _0x22ab;
    document[_0x3ee203(0x213)](_0x3ee203(0x206))[_0x3ee203(0x1bc)][_0x3ee203(0x16f)] = _0x3ee203(0x172);
}

function handleAsk() {
    const _0x49135b = _0x22ab,
        _0x218586 = document[_0x49135b(0x213)](_0x49135b(0x1df)),
        _0x114662 = document[_0x49135b(0x213)](_0x49135b(0x119)),
        _0x8937f4 = _0x218586['value'][_0x49135b(0x1ec)]();
    if (!_0x8937f4) return;
    travisMemory[_0x49135b(0x118)]++;
    const _0x35c431 = _0x8937f4[_0x49135b(0x18b)]()[_0x49135b(0x1ec)](),
        _0x477e7a = getFin(),
        _0x396afd = getStatusSummary(),
        _0x3ef878 = 'business' === state[_0x49135b(0x17c)][_0x49135b(0x29c)];
    let _0x3a57fb = 0x0;
    const _0x2e555e = _0x35c431['replace'](/,/g, '')[_0x49135b(0x12a)](/(\d+(?:\.\d+)?)\s*(k|thousand|ksh|shillings|bob)?/i);
    _0x2e555e && (_0x3a57fb = parseFloat(_0x2e555e[0x1]), _0x2e555e[0x2] && /k|thousand/i ['test'](_0x2e555e[0x2]) && (_0x3a57fb *= 0x3e8));
    const _0x10bc2d = (..._0x1bc376) => _0x1bc376[_0x49135b(0x293)](_0x59998e => _0x35c431[_0x49135b(0x154)](_0x59998e)),
        _0xf5cd42 = {
            'spend': _0x10bc2d(_0x49135b(0x294), _0x49135b(0x244), _0x49135b(0x297), _0x49135b(0x27a), _0x49135b(0x2a9), 'purchase', _0x49135b(0x18f), _0x49135b(0x29f), _0x49135b(0xa8), _0x49135b(0x250)),
            'loan': _0x10bc2d('loan', 'borrow', _0x49135b(0x249), _0x49135b(0x283), _0x49135b(0x131), _0x49135b(0x1f0), 'tala', _0x49135b(0x134), _0x49135b(0x218)),
            'stock': _0x10bc2d(_0x49135b(0x2aa), _0x49135b(0xe1), _0x49135b(0x26f), _0x49135b(0x1d6), _0x49135b(0x220), _0x49135b(0xea), 'merchandise', _0x49135b(0xc0)),
            'staff': _0x10bc2d(_0x49135b(0x1b3), _0x49135b(0x281), 'employee', 'hire', _0x49135b(0x195), 'payroll', 'salary\x20for', _0x49135b(0x1b4), 'add\x20person', _0x49135b(0x22e)),
            'tax': _0x10bc2d('tax', _0x49135b(0x152), 'vat', 'paye', _0x49135b(0x28a), 'filing', _0x49135b(0x262), _0x49135b(0x21b), _0x49135b(0x210)),
            'asset': _0x10bc2d(_0x49135b(0xed), _0x49135b(0x1b1), _0x49135b(0x1d9), 'laptop', _0x49135b(0x146), _0x49135b(0x121), 'generator', _0x49135b(0xe6), _0x49135b(0x25a), 'bodaboda', _0x49135b(0x19d)),
            'status': _0x10bc2d(_0x49135b(0x1fe), _0x49135b(0x1d2), 'status', 'situation', _0x49135b(0xeb), 'trajectory', _0x49135b(0x1a6), _0x49135b(0x290), _0x49135b(0xf7), 'end\x20of\x20month', _0x49135b(0x175), _0x49135b(0x15b), _0x49135b(0x1a8), 'overview', _0x49135b(0x24a)),
            'profit': _0x10bc2d('profit', _0x49135b(0x1f6), 'more\x20money', 'grow', 'increase', 'boost', _0x49135b(0x1d0), _0x49135b(0xb5), _0x49135b(0xb0)),
            'habit': _0x10bc2d(_0x49135b(0x178), _0x49135b(0x22d), 'how\x20much\x20should\x20i', 'daily\x20limit', _0x49135b(0x16e), 'what\x20can\x20i\x20spend'),
            'savings': _0x10bc2d(_0x49135b(0x179), _0x49135b(0x1e0), _0x49135b(0x279), 'emergency', _0x49135b(0x1de), _0x49135b(0x27f)),
            'pricing': _0x10bc2d(_0x49135b(0x248), 'charge', 'how\x20much\x20to\x20sell', _0x49135b(0x1cd), _0x49135b(0x291), _0x49135b(0x11e), _0x49135b(0x1d3)),
            'cashflow': _0x10bc2d(_0x49135b(0x162), _0x49135b(0x1e1), _0x49135b(0x12d), 'money\x20out', _0x49135b(0x25f), 'revenue\x20this', 'when\x20will'),
            'rent': _0x10bc2d(_0x49135b(0x265), 'landlord', _0x49135b(0x15f), _0x49135b(0x278)),
            'school': _0x10bc2d('school', _0x49135b(0x2ab), _0x49135b(0x1b0), _0x49135b(0xca), 'college', 'university'),
            'medical': _0x10bc2d('hospital', _0x49135b(0x19a), 'medicine', _0x49135b(0x1fd), _0x49135b(0x224), _0x49135b(0x23c), _0x49135b(0xa6)),
            'family': _0x10bc2d(_0x49135b(0x28b), 'relative', _0x49135b(0x216), 'sibling', _0x49135b(0x238), _0x49135b(0x174), _0x49135b(0x1cf), _0x49135b(0xd9), _0x49135b(0x273)),
            'invest': _0x10bc2d(_0x49135b(0xf9), 'investment', _0x49135b(0x1f9), _0x49135b(0x1e8), _0x49135b(0x1b2), _0x49135b(0x241), 'crypto', 'nse'),
            'compare': _0x10bc2d('vs', _0x49135b(0x2a0), _0x49135b(0x1a9), _0x49135b(0x25e), _0x49135b(0x114)),
            'withdraw': _0x10bc2d('withdraw', _0x49135b(0xf6), 'mpesa', _0x49135b(0x1c0), _0x49135b(0x145))
        },
        _0x424c6e = _0x396afd[_0x49135b(0x10e)],
        _0x101c86 = _0x396afd['dailyCap'],
        _0x3c4127 = _0x396afd[_0x49135b(0x21f)],
        _0x6202fc = _0x477e7a[_0x49135b(0x25c)],
        _0x361a2e = (_0x477e7a[_0x49135b(0x1a5)], _0x3a57fb > 0x0 ? _0x3a57fb / _0x424c6e : 0x0),
        _0xbc2dd4 = _0x424c6e - _0x101c86 * _0x6202fc,
        _0x412271 = {
            'LOW': _0x49135b(0x259),
            'MODERATE': _0x49135b(0x208),
            'CRITICAL': _0x49135b(0xf5)
        } [_0x3c4127] || 'var(--color-text-secondary)';
    let _0x2e90dd = {
        'body': '',
        'conclusion': '',
        'actions': []
    };
    if (_0x3a57fb > 0x0 && (_0xf5cd42[_0x49135b(0x244)] || _0xf5cd42['rent'] || _0xf5cd42[_0x49135b(0x183)] || _0xf5cd42['medical'] || _0xf5cd42[_0x49135b(0x28b)] || _0xf5cd42[_0x49135b(0x2aa)])) {
        const _0xac23a3 = _0xf5cd42['rent'] || _0xf5cd42[_0x49135b(0x183)] || _0xf5cd42[_0x49135b(0x1ad)],
            _0x16fa29 = _0x3a57fb <= _0x101c86,
            _0x56cf19 = Math['round'](0x64 * _0x361a2e),
            _0x64f70e = _0x424c6e - _0x3a57fb,
            _0x37f700 = _0x6202fc > 0x0 ? Math['floor'](_0x64f70e / _0x6202fc) : 0x0;
        if (_0xac23a3) _0x424c6e < 0x0 ? (_0x2e90dd[_0x49135b(0x267)] = _0x49135b(0x10d) + _0x3a57fb['toLocaleString']() + _0x49135b(0x1ab) + Math[_0x49135b(0x129)](_0x424c6e)['toLocaleString']() + _0x49135b(0x276), _0x2e90dd[_0x49135b(0xbf)] = 'Don\x27t\x20pay\x20this\x20today\x20unless\x20someone\x20will\x20cut\x20you\x20off\x20or\x20lock\x20you\x20out.\x20Negotiate\x203–5\x20days,\x20use\x20that\x20window\x20to\x20raise\x20cash\x20first.') : _0x16fa29 ? (_0x2e90dd[_0x49135b(0x267)] = _0x49135b(0x135) + _0x3a57fb[_0x49135b(0x1af)]() + _0x49135b(0xc2) + _0x64f70e[_0x49135b(0x1af)]() + _0x49135b(0x1f3) + _0x37f700[_0x49135b(0x1af)]() + _0x49135b(0x284) + (_0x37f700 >= 0x1f4 ? _0x49135b(0xa9) : _0x49135b(0x11b)) + '.', _0x2e90dd[_0x49135b(0xbf)] = _0x49135b(0x120) + _0x6202fc + _0x49135b(0x2a8)) : (_0x2e90dd[_0x49135b(0x267)] = _0x49135b(0xf4) + _0x3a57fb[_0x49135b(0x1af)]() + _0x49135b(0x29b) + _0x101c86[_0x49135b(0x1af)]() + _0x49135b(0x158) + _0x56cf19 + '%\x20of\x20your\x20buffer\x20and\x20leave\x20you\x20with\x20only\x20KSh\x20' + _0x64f70e[_0x49135b(0x1af)]() + _0x49135b(0x27c) + _0x6202fc + _0x49135b(0x17d) + _0x37f700['toLocaleString']() + _0x49135b(0x1a2), _0x2e90dd[_0x49135b(0xbf)] = 'Pay\x20it\x20—\x20obligations\x20must\x20be\x20honoured.\x20But\x20immediately\x20after,\x20cut\x20all\x20discretionary\x20spending\x20for\x20the\x20rest\x20of\x20this\x20week\x20and\x20focus\x20on\x20cash\x20inflow\x20to\x20rebuild\x20that\x20buffer.');
        else {
            if (_0xf5cd42[_0x49135b(0x2aa)] && _0x3ef878) {
                const _0x32e630 = Math['floor'](0.5 * _0x424c6e);
                _0x3a57fb > _0x424c6e ? (_0x2e90dd[_0x49135b(0x267)] = 'You\x20want\x20to\x20restock\x20for\x20KSh\x20' + _0x3a57fb[_0x49135b(0x1af)]() + _0x49135b(0x211) + _0x424c6e['toLocaleString']() + _0x49135b(0x15e), _0x2e90dd[_0x49135b(0xbf)] = _0x49135b(0x252) + _0x32e630['toLocaleString']() + _0x49135b(0x217)) : _0x3a57fb > _0x32e630 ? (_0x2e90dd[_0x49135b(0x267)] = _0x49135b(0x13c) + _0x3a57fb['toLocaleString']() + _0x49135b(0x165) + _0x56cf19 + _0x49135b(0x12e), _0x2e90dd[_0x49135b(0xbf)] = _0x49135b(0xd3) + Math[_0x49135b(0x257)](0.6 * _0x424c6e)[_0x49135b(0x1af)]() + '.\x20If\x20your\x20goods\x20are\x20slow-moving,\x20cut\x20the\x20order\x20to\x20KSh\x20' + _0x32e630[_0x49135b(0x1af)]() + _0x49135b(0x292)) : (_0x2e90dd['body'] = _0x49135b(0x135) + _0x3a57fb[_0x49135b(0x1af)]() + _0x49135b(0xe3) + _0x56cf19 + _0x49135b(0x268) + _0x64f70e['toLocaleString']() + _0x49135b(0xda), _0x2e90dd[_0x49135b(0xbf)] = _0x49135b(0x1bf));
            } else _0x49135b(0x240) === _0x3c4127 || _0x424c6e <= 0x0 ? (_0x2e90dd[_0x49135b(0x267)] = 'You\x27re\x20thinking\x20about\x20spending\x20KSh\x20' + _0x3a57fb[_0x49135b(0x1af)]() + _0x49135b(0x16b) + _0x424c6e[_0x49135b(0x1af)]() + ',\x20which\x20means\x20there\x27s\x20almost\x20no\x20room\x20between\x20you\x20and\x20not\x20being\x20able\x20to\x20meet\x20your\x20obligations.', _0x2e90dd[_0x49135b(0xbf)] = _0x49135b(0x191)) : _0x16fa29 ? (_0x2e90dd[_0x49135b(0x267)] = _0x49135b(0x135) + _0x3a57fb[_0x49135b(0x1af)]() + '\x20fits\x20inside\x20your\x20daily\x20cap\x20of\x20KSh\x20' + _0x101c86[_0x49135b(0x1af)]() + _0x49135b(0xe0) + _0x56cf19 + _0x49135b(0x17b) + _0x64f70e[_0x49135b(0x1af)]() + _0x49135b(0x1b8) + _0x6202fc + '\x20days\x20would\x20still\x20be\x20workable\x20at\x20KSh\x20' + _0x37f700[_0x49135b(0x1af)]() + _0x49135b(0x26a), _0x2e90dd[_0x49135b(0xbf)] = _0x49135b(0x151)) : (_0x2e90dd['body'] = _0x49135b(0x135) + _0x3a57fb['toLocaleString']() + _0x49135b(0xde) + _0x101c86['toLocaleString']() + '.\x20That\x27s\x20not\x20automatically\x20a\x20disaster\x20—\x20but\x20it\x20does\x20mean\x20you\x27re\x20borrowing\x20from\x20tomorrow\x27s\x20budget\x20today.\x20After\x20this\x20spend,\x20your\x20remaining\x20' + (_0x6202fc - 0x1) + _0x49135b(0x261) + _0x37f700['toLocaleString']() + _0x49135b(0x19b) + _0x101c86[_0x49135b(0x1af)]() + '.', _0x2e90dd[_0x49135b(0xbf)] = _0x49135b(0xcf) === _0x3c4127 ? _0x49135b(0x219) : 'I\x27d\x20reduce\x20it\x20to\x20around\x20KSh\x20' + Math['floor'](0.8 * _0x101c86)[_0x49135b(0x1af)]() + '\x20or\x20delay\x20to\x20a\x20day\x20when\x20you\x27ve\x20had\x20good\x20income.');
        }
        _0x2e90dd[_0x49135b(0x16d)] = [{
            'label': _0x49135b(0xec),
            'q': _0x49135b(0x156)
        }, {
            'label': _0x49135b(0x1a4),
            'q': _0x49135b(0xd5)
        }];
    } else {
        if (_0xf5cd42[_0x49135b(0xf0)]) {
            const _0x12443c = _0x3a57fb || 0x0,
                _0x397ae1 = 0.15,
                _0x59a068 = _0x12443c > 0x0 ? Math[_0x49135b(0x13e)](_0x12443c * (0x1 + _0x397ae1)) : 0x0,
                _0x527a11 = _0x6202fc > 0x0 ? Math['round'](_0x59a068 / 0x1e) : 0x0;
            'CRITICAL' === _0x3c4127 ? (_0x2e90dd[_0x49135b(0x267)] = _0x49135b(0x116) + _0x424c6e[_0x49135b(0x1af)]() + _0x49135b(0x11d), _0x2e90dd[_0x49135b(0xbf)] = _0x49135b(0x26b)) : _0x49135b(0x24d) === _0x3c4127 ? (_0x2e90dd[_0x49135b(0x267)] = _0x49135b(0x13d) + (_0x12443c > 0x0 ? _0x12443c[_0x49135b(0x1af)]() : _0x49135b(0x225)) + _0x49135b(0x275) + (_0x12443c > 0x0 ? _0x59a068[_0x49135b(0x1af)]() : _0x49135b(0x1c8)) + '\x20owed.', _0x2e90dd[_0x49135b(0xbf)] = _0x12443c > 0x0 ? _0x49135b(0x298) + Math['round'](1.2 * _0x59a068)[_0x49135b(0x1af)]() + _0x49135b(0x1ba) : _0x49135b(0x256)) : (_0x2e90dd[_0x49135b(0x267)] = _0x49135b(0x149) + (_0x12443c > 0x0 ? _0x49135b(0x2ad) + _0x12443c['toLocaleString']() + _0x49135b(0x234) + _0x59a068[_0x49135b(0x1af)]() + _0x49135b(0x25d) + _0x527a11[_0x49135b(0x1af)]() + '\x20per\x20day\x20added\x20to\x20your\x20obligations.' : 'Just\x20calculate\x20the\x20daily\x20repayment\x20cost\x20against\x20your\x20current\x20daily\x20cap\x20before\x20committing.'), _0x2e90dd['conclusion'] = _0x49135b(0x1a1)), _0x2e90dd['actions'] = [{
                'label': _0x49135b(0xc9),
                'q': _0x49135b(0x264)
            }, {
                'label': 'How\x20to\x20boost\x20income\x20instead',
                'q': _0x49135b(0xc6)
            }];
        } else {
            if (_0xf5cd42[_0x49135b(0x281)]) {
                const _0x3607f1 = _0x3a57fb || 0x0,
                    _0x53d018 = Math[_0x49135b(0x257)](0.25 * _0x424c6e);
                _0x3607f1 > 0x0 && Math[_0x49135b(0x257)](_0x53d018 / _0x3607f1), _0x49135b(0x240) === _0x3c4127 || _0x424c6e < 0x1388 ? (_0x2e90dd[_0x49135b(0x267)] = _0x49135b(0xe8) + _0x424c6e[_0x49135b(0x1af)]() + _0x49135b(0x177), _0x2e90dd['conclusion'] = 'Don\x27t\x20hire\x20right\x20now.\x20The\x20business\x20isn\x27t\x20stable\x20enough\x20to\x20guarantee\x20a\x20consistent\x20wage.\x20Get\x20the\x20buffer\x20above\x20KSh\x2015,000\x20first,\x20then\x20revisit.') : _0x3607f1 > 0x0 ? _0x3607f1 > _0x53d018 ? (_0x2e90dd[_0x49135b(0x267)] = 'You\x27re\x20thinking\x20about\x20bringing\x20someone\x20on\x20at\x20KSh\x20' + _0x3607f1['toLocaleString']() + '\x20per\x20month.\x20Based\x20on\x20your\x20current\x20buffer\x20of\x20KSh\x20' + _0x424c6e[_0x49135b(0x1af)]() + _0x49135b(0x11a) + _0x53d018[_0x49135b(0x1af)]() + '\x20—\x20which\x20is\x2025%\x20of\x20your\x20free\x20cash.', _0x2e90dd[_0x49135b(0xbf)] = _0x49135b(0x296) + _0x53d018['toLocaleString']() + '\x20or\x20less,\x20or\x20look\x20for\x20a\x20commission-based\x20arrangement\x20where\x20you\x20only\x20pay\x20when\x20they\x20generate\x20sales.') : (_0x2e90dd[_0x49135b(0x267)] = _0x49135b(0x2ad) + _0x3607f1['toLocaleString']() + _0x49135b(0x1eb) + _0x53d018[_0x49135b(0x1af)]() + '.', _0x2e90dd['conclusion'] = 'Financially\x20this\x20works.\x20Before\x20hiring,\x20define\x20exactly\x20what\x20this\x20person\x20will\x20do\x20to\x20move\x20money\x20—\x20more\x20sales,\x20faster\x20service,\x20more\x20hours\x20covered.') : (_0x2e90dd[_0x49135b(0x267)] = _0x49135b(0x167) + _0x424c6e[_0x49135b(0x1af)]() + _0x49135b(0x18c) + _0x53d018[_0x49135b(0x1af)]() + '\x20monthly.', _0x2e90dd[_0x49135b(0xbf)] = 'Tell\x20me\x20the\x20wage\x20you\x20have\x20in\x20mind\x20and\x20I\x27ll\x20calculate\x20whether\x20the\x20numbers\x20work.', _0x2e90dd[_0x49135b(0x16d)] = [{
                    'label': 'Calculate\x20for\x20a\x20specific\x20wage',
                    'q': _0x49135b(0xe5)
                }]);
            } else {
                if (_0xf5cd42[_0x49135b(0xfd)]) _0x2e90dd['body'] = _0x49135b(0x198), _0x2e90dd['conclusion'] = _0x49135b(0x194), _0x2e90dd[_0x49135b(0x16d)] = [{
                    'label': 'How\x20much\x20tax\x20should\x20I\x20set\x20aside',
                    'q': _0x49135b(0xee)
                }];
                else {
                    if (_0xf5cd42[_0x49135b(0xed)]) {
                        const _0x2dcae4 = _0x3a57fb || 0x0,
                            _0x5512dc = _0x2dcae4 > 0x0 ? Math[_0x49135b(0x13e)](_0x2dcae4 / _0x424c6e * 0x64) : 0x0;
                        _0x2e90dd[_0x49135b(0x267)] = _0x2dcae4 > 0x0 ? _0x49135b(0x214) + _0x2dcae4[_0x49135b(0x1af)]() + _0x49135b(0x10b) + _0x5512dc + _0x49135b(0xf1) + _0x424c6e[_0x49135b(0x1af)]() + _0x49135b(0x1c1) : _0x49135b(0xb4) + _0x424c6e[_0x49135b(0x1af)]() + '.', _0x2e90dd[_0x49135b(0xbf)] = _0x49135b(0x240) === _0x3c4127 ? _0x49135b(0x271) : _0x2dcae4 > 0.5 * _0x424c6e ? _0x49135b(0x1c3) + _0x5512dc + '%\x20of\x20your\x20buffer,\x20this\x20would\x20strain\x20your\x20liquidity.\x20Look\x20at\x20leasing,\x20hire-purchase,\x20or\x20phased\x20payment\x20options.' : _0x49135b(0xd7) + Math[_0x49135b(0x13e)](0.4 * _0x424c6e)[_0x49135b(0x1af)]() + _0x49135b(0x285), _0x2e90dd[_0x49135b(0x16d)] = [{
                            'label': 'Can\x20I\x20use\x20a\x20loan\x20for\x20this',
                            'q': _0x49135b(0x15c)
                        }];
                    } else {
                        if (_0xf5cd42['savings']) {
                            const _0x53e1d9 = _0x49135b(0xcf) === _0x3c4127 ? 0.15 : 'MODERATE' === _0x3c4127 ? 0.07 : 0x0,
                                _0x46f201 = Math[_0x49135b(0x257)](_0x424c6e * _0x53e1d9);
                            _0x49135b(0x240) === _0x3c4127 ? (_0x2e90dd[_0x49135b(0x267)] = 'The\x20instinct\x20to\x20save\x20is\x20a\x20good\x20one\x20—\x20but\x20saving\x20while\x20your\x20operating\x20buffer\x20is\x20negative\x20or\x20critical\x20is\x20like\x20filling\x20a\x20bucket\x20that\x20has\x20a\x20hole\x20in\x20it.', _0x2e90dd['conclusion'] = 'Don\x27t\x20save\x20right\x20now.\x20Fix\x20the\x20cash\x20flow\x20first\x20—\x20get\x20risk\x20down\x20to\x20moderate,\x20then\x20start\x20putting\x205–10%\x20aside.') : (_0x2e90dd['body'] = 'With\x20your\x20buffer\x20at\x20KSh\x20' + _0x424c6e[_0x49135b(0x1af)]() + '\x20and\x20risk\x20at\x20' + _0x3c4127 + _0x49135b(0x139) + Math['round'](0x64 * _0x53e1d9) + _0x49135b(0x160) + _0x46f201[_0x49135b(0x1af)]() + _0x49135b(0x207), _0x2e90dd[_0x49135b(0xbf)] = 'Start\x20with\x20KSh\x20' + _0x46f201[_0x49135b(0x1af)]() + _0x49135b(0xbb));
                        } else {
                            if (_0xf5cd42[_0x49135b(0x101)]) _0x2e90dd[_0x49135b(0x267)] = _0x49135b(0x2a1), _0x2e90dd[_0x49135b(0xbf)] = 'Review\x20your\x20top\x205\x20selling\x20items\x20and\x20check\x20what\x20you\x27re\x20making\x20per\x20unit\x20after\x20cost.\x20If\x20any\x20item\x20is\x20below\x2025%\x20margin,\x20either\x20raise\x20the\x20price\x20or\x20stop\x20stocking\x20it.', _0x2e90dd[_0x49135b(0x16d)] = [{
                                'label': _0x49135b(0x141),
                                'q': _0x49135b(0x115)
                            }];
                            else {
                                if (_0xf5cd42['invest']) _0x2e90dd[_0x49135b(0x267)] = _0x49135b(0x231) + _0x424c6e[_0x49135b(0x1af)]() + '\x20and\x20risk\x20is\x20' + _0x3c4127 + '.', _0x2e90dd[_0x49135b(0xbf)] = _0x49135b(0xcf) === _0x3c4127 ? _0x49135b(0xab) : 'Build\x20the\x20emergency\x20fund\x20first.\x20Once\x20you\x20have\x203\x20months\x20of\x20obligations\x20saved,\x20then\x20talk\x20about\x20investing.';
                                else {
                                    if (_0xf5cd42[_0x49135b(0x173)] || _0xf5cd42[_0x49135b(0x1e1)]) {
                                        const _0x59b4dd = _0xbc2dd4 >= 0x0 ? _0x49135b(0x1f8) + _0xbc2dd4['toLocaleString']() + _0x49135b(0x112) : _0x49135b(0x228) + Math[_0x49135b(0x129)](_0xbc2dd4)['toLocaleString']() + _0x49135b(0x186),
                                            _0x3a0138 = _0x101c86 <= 0x0 ? 'you\x20have\x20no\x20safe\x20daily\x20spend\x20budget\x20right\x20now' : _0x101c86 < 0x12c ? 'your\x20daily\x20budget\x20is\x20very\x20tight\x20at\x20KSh\x20' + _0x101c86[_0x49135b(0x1af)]() : _0x49135b(0x102) + _0x101c86['toLocaleString']() + '\x20of\x20safe\x20daily\x20spend';
                                        _0x2e90dd['body'] = _0x49135b(0x233) + _0x424c6e[_0x49135b(0x1af)]() + _0x49135b(0x1b7) + _0x6202fc + '\x20days\x20left\x20this\x20month,\x20and\x20' + _0x3a0138 + _0x49135b(0x18e) + _0x59b4dd + _0x49135b(0xbd) + _0x3c4127 + '.', _0x2e90dd[_0x49135b(0xbf)] = _0x49135b(0xcf) === _0x3c4127 ? _0x49135b(0x1e9) + _0x101c86[_0x49135b(0x1af)]() + _0x49135b(0x2a4) : _0x49135b(0x24d) === _0x3c4127 ? _0x49135b(0x2a5) : _0x49135b(0x28d), _0x2e90dd[_0x49135b(0x16d)] = [{
                                            'label': _0x49135b(0x226),
                                            'q': _0x49135b(0x201)
                                        }, {
                                            'label': _0x49135b(0x111),
                                            'q': 'How\x20can\x20I\x20bring\x20in\x20more\x20money\x20this\x20week?'
                                        }];
                                    } else {
                                        if (_0xf5cd42[_0x49135b(0x178)]) {
                                            const _0x1ff546 = 0x7 * _0x101c86;
                                            _0x2e90dd[_0x49135b(0x267)] = _0x49135b(0x103) + _0x101c86[_0x49135b(0x1af)]() + '\x20—\x20that\x27s\x20what\x20you\x20can\x20spend\x20per\x20day\x20without\x20endangering\x20your\x20ability\x20to\x20pay\x20obligations\x20by\x20end\x20of\x20month.\x20Over\x20a\x20week,\x20that\x27s\x20KSh\x20' + _0x1ff546[_0x49135b(0x1af)]() + '.', _0x2e90dd[_0x49135b(0xbf)] = _0x49135b(0x1b9) + _0x101c86[_0x49135b(0x1af)]() + '\x20as\x20your\x20absolute\x20daily\x20ceiling,\x20not\x20a\x20target.\x20On\x20days\x20when\x20you\x20spend\x20less,\x20don\x27t\x20\x22catch\x20up\x22\x20the\x20next\x20day\x20—\x20let\x20that\x20surplus\x20rebuild\x20your\x20buffer.';
                                        } else {
                                            if (_0xf5cd42[_0x49135b(0x221)]) _0x2e90dd[_0x49135b(0x267)] = _0x49135b(0x11c) + (_0x3ef878 ? _0x49135b(0x19f) : _0x49135b(0x205)) + '\x20comes\x20from\x20two\x20directions\x20—\x20more\x20money\x20coming\x20in,\x20or\x20less\x20going\x20out.\x20Most\x20small\x20businesses\x20in\x20Kenya\x20don\x27t\x20fail\x20because\x20of\x20low\x20sales\x20—\x20they\x20fail\x20because\x20their\x20costs\x20grow\x20as\x20fast\x20as\x20their\x20revenue.', _0x2e90dd[_0x49135b(0xbf)] = _0x3ef878 ? _0x49135b(0x27d) : _0x49135b(0x247);
                                            else {
                                                if (_0xf5cd42[_0x49135b(0x28b)] && 0x0 === _0x3a57fb) _0x2e90dd[_0x49135b(0x267)] = _0x49135b(0xcc) + _0x424c6e[_0x49135b(0x1af)]() + _0x49135b(0x20a), _0x2e90dd[_0x49135b(0xbf)] = 'Set\x20a\x20fixed\x20monthly\x20family\x20contribution\x20ceiling\x20—\x20something\x20you\x20can\x20always\x20honour\x20without\x20compromising\x20your\x20obligations.';
                                                else {
                                                    if (_0xf5cd42[_0x49135b(0x142)]) {
                                                        const _0x15855b = _0x3a57fb || _0x101c86;
                                                        _0x2e90dd[_0x49135b(0x267)] = _0x49135b(0x20e) + _0x15855b['toLocaleString']() + _0x49135b(0x1c9) + (_0x15855b > _0x101c86 ? _0x49135b(0x132) + _0x101c86[_0x49135b(0x1af)]() + '.' : '\x20sits\x20within\x20your\x20daily\x20cap,\x20so\x20it\x27s\x20fine\x20from\x20a\x20budget\x20standpoint.') + _0x49135b(0x104), _0x2e90dd[_0x49135b(0xbf)] = _0x15855b > _0x101c86 ? _0x49135b(0x1f5) : _0x49135b(0x192);
                                                    } else _0x2e90dd[_0x49135b(0x267)] = _0x49135b(0x1be) + _0x424c6e[_0x49135b(0x1af)]() + _0x49135b(0xbe) + _0x101c86[_0x49135b(0x1af)]() + _0x49135b(0x1d5) + _0x3c4127 + _0x49135b(0x270) + _0x6202fc + _0x49135b(0x1d4), _0x2e90dd[_0x49135b(0xbf)] = 'Ask\x20me\x20about\x20a\x20specific\x20decision\x20—\x20a\x20purchase,\x20a\x20loan,\x20hiring,\x20pricing,\x20saving,\x20or\x20anything\x20money-related\x20—\x20and\x20I\x27ll\x20give\x20you\x20a\x20direct\x20answer\x20based\x20on\x20your\x20actual\x20numbers.', _0x2e90dd['actions'] = [{
                                                        'label': _0x49135b(0x1fb),
                                                        'q': _0x49135b(0xc8)
                                                    }, {
                                                        'label': _0x49135b(0xcd),
                                                        'q': _0x49135b(0x16a)
                                                    }, {
                                                        'label': _0x49135b(0x28c),
                                                        'q': _0x49135b(0x22b)
                                                    }];
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    const _0x573052 = function(_0x2fc7dc) {
        const _0x35d4a6 = _0x49135b,
            _0x16d024 = _0x35d4a6(0x185) + _0x412271 + ';\x22>' + _0x3c4127 + _0x35d4a6(0x26c) + _0x101c86[_0x35d4a6(0x1af)]() + _0x35d4a6(0x1d8) + _0x424c6e[_0x35d4a6(0x1af)]() + _0x35d4a6(0xe9) + _0x6202fc + _0x35d4a6(0x2a3),
            _0x1cba34 = _0x35d4a6(0x295) + _0x412271 + _0x35d4a6(0x14b) + _0x2fc7dc[_0x35d4a6(0xbf)] + '</div></div>',
            _0x29e259 = _0x2fc7dc[_0x35d4a6(0x16d)] && _0x2fc7dc[_0x35d4a6(0x16d)]['length'] ? _0x35d4a6(0x253) + _0x2fc7dc[_0x35d4a6(0x16d)][_0x35d4a6(0xc4)](_0x4a8c91 => _0x35d4a6(0x22f) + _0x4a8c91['q'] + _0x35d4a6(0xb9) + _0x4a8c91[_0x35d4a6(0x161)] + '\x20↗</button>')[_0x35d4a6(0x1e6)]('') + '</div>' : '';
        return _0x16d024 + '<div\x20style=\x22font-size:15px;line-height:1.75;color:var(--color-text-primary);margin-bottom:4px;\x22>' + _0x2fc7dc[_0x35d4a6(0x267)] + _0x35d4a6(0x1a7) + _0x1cba34 + _0x29e259;
    }(_0x2e90dd);
    _0x114662[_0x49135b(0xfc)] += _0x49135b(0xfe) + _0x8937f4 + _0x49135b(0x287) + _0x573052 + '</div></div>', _0x218586[_0x49135b(0x1fa)] = '', _0x114662[_0x49135b(0xaa)] = _0x114662[_0x49135b(0x1ce)];
}

function boot() {
    const _0x52647c = _0x22ab;
    loadState(), state[_0x52647c(0x17c)] ? (document['getElementById'](_0x52647c(0x1ae))[_0x52647c(0x1bc)]['display'] = 'none', document[_0x52647c(0x213)](_0x52647c(0x1bd))[_0x52647c(0x1f1)] = state[_0x52647c(0x17c)][_0x52647c(0x202)], document[_0x52647c(0x213)](_0x52647c(0x22c))[_0x52647c(0x1f1)] = state[_0x52647c(0x17c)]['type']['toUpperCase']() + _0x52647c(0x1cc), document[_0x52647c(0x213)](_0x52647c(0x13f))[_0x52647c(0x1f1)] = state[_0x52647c(0x17c)][_0x52647c(0x202)], document[_0x52647c(0x213)]('sidebar-type')['innerText'] = state[_0x52647c(0x17c)]['type']['charAt'](0x0)[_0x52647c(0xdd)]() + state[_0x52647c(0x17c)][_0x52647c(0x29c)][_0x52647c(0x1b5)](0x1), document[_0x52647c(0x213)](_0x52647c(0x1a3))['innerText'] = state['user'][_0x52647c(0x202)][_0x52647c(0x245)](0x0)[_0x52647c(0xdd)](), checkDead() || navClick(_0x52647c(0x254))) : document['getElementById'](_0x52647c(0x1ae))['style'][_0x52647c(0x16f)] = _0x52647c(0x182);
}

function _0x3540() {
    const _0x16c28e = ['Whether\x20you\x20can\x20add\x20staff\x20depends\x20entirely\x20on\x20your\x20wage\x20budget\x20and\x20the\x20business\x27s\x20current\x20cash\x20flow.\x20Your\x20buffer\x20is\x20KSh\x20', 'div', 'clock-time', 'What\x20is\x20the\x20most\x20important\x20financial\x20action\x20I\x20should\x20take\x20today?', '\x20right\x20now,\x20but\x20I\x20have\x20to\x20be\x20straight\x20with\x20you\x20—\x20your\x20financial\x20position\x20is\x20critical.\x20Your\x20buffer\x20is\x20KSh\x20', 'daily', 'actions', 'how\x20much\x20can\x20i\x20spend', 'display', '\x20TX', 'keypress', 'none', 'status', 'send\x20money', 'how\x20are\x20things', '85wrtXor', '\x20—\x20that\x27s\x20the\x20money\x20available\x20after\x20all\x20your\x20obligations.\x20Hiring\x20someone\x20means\x20committing\x20to\x20a\x20wage\x20every\x20single\x20month.', 'habit', 'save', 'nav-sidebar', '%\x20of\x20your\x20buffer\x20—\x20that\x27s\x20a\x20manageable\x20spend.\x20After\x20this,\x20you\x27d\x20still\x20have\x20KSh\x20', 'user', '\x20days.\x20That\x27s\x20a\x20tight\x20squeeze\x20—\x20your\x20daily\x20breathing\x20room\x20drops\x20to\x20about\x20KSh\x20', 'repeat(2,1fr)', 'replaceChild', '#C42B1C', 'custom-alert-message', 'flex', 'school', '6317004JvClxi', '<div\x20style=\x22display:flex;flex-wrap:wrap;align-items:center;gap:6px\x2010px;padding:10px\x2012px;background:var(--color-background-secondary);border-radius:var(--border-radius-md);margin-bottom:14px;font-size:13px;\x22><div\x20style=\x22display:flex;align-items:center;gap:5px;white-space:nowrap;\x22><span\x20style=\x22color:var(--color-text-secondary);font-size:12px;\x22>Risk</span><span\x20style=\x22font-weight:500;color:', '\x20before\x20month\x20end', 'OPERATING\x20EXPENSES', 'user-name', 'onload', 'input', 'toLowerCase', ',\x20and\x20a\x20safe\x20guideline\x20is\x20that\x20total\x20wages\x20shouldn\x27t\x20exceed\x2025–30%\x20of\x20that\x20buffer\x20per\x20month\x20—\x20so\x20you\x20have\x20room\x20for\x20wages\x20of\x20up\x20to\x20KSh\x20', 'remove', '.\x20If\x20you\x20continue\x20at\x20your\x20current\x20spending\x20pace,\x20you\x27ll\x20', 'take', 'transactions', 'Hold\x20off\x20on\x20this.\x20It\x27s\x20not\x20about\x20the\x20amount\x20being\x20huge\x20—\x20it\x27s\x20about\x20what\x20month\x20end\x20looks\x20like\x20if\x20you\x20keep\x20going.\x20Protect\x20the\x20buffer\x20first.', 'This\x20amount\x20is\x20fine.\x20Just\x20make\x20sure\x20you\x27re\x20withdrawing\x20for\x20a\x20specific\x20purpose\x20—\x20not\x20as\x20a\x20\x22just\x20in\x20case\x22.', '58870LJxDEX', 'File\x20on\x20time,\x20every\x20time,\x20even\x20if\x20you\x20can\x27t\x20pay\x20everything\x20immediately.\x20A\x20filed-but-unpaid\x20return\x20is\x20better\x20than\x20an\x20unfiled\x20one.', 'employ', 'Total\x20Liquid', 'en-KE', 'Tax\x20is\x20one\x20of\x20those\x20things\x20people\x20delay\x20until\x20KRA\x20makes\x20it\x20painful\x20—\x20and\x20KRA\x27s\x20penalties\x20are\x20not\x20small.\x20A\x20late\x20filing\x20penalty\x20alone\x20starts\x20at\x20KSh\x2020,000\x20or\x205%\x20of\x20tax\x20owed,\x20whichever\x20is\x20higher,\x20and\x20interest\x20compounds\x20monthly\x20at\x201%.', 'chip\x20chip-green', 'clinic', '\x20to\x20work\x20with\x20instead\x20of\x20', 'Strategy\x20Error:<br><br>A\x20transaction\x20must\x20move\x20value\x20between\x20two\x20different\x20accounts.', 'buy\x20equipment', 'tx-debit', 'business', '\x20entries</div></div><div\x20style=\x22overflow-x:auto;\x22><table\x20class=\x22win-table\x22\x20style=\x22min-width:600px;\x22><thead><tr><th>Date</th><th>Transaction</th><th\x20style=\x22text-align:right;\x22>Debit\x20(+)</th><th\x20style=\x22text-align:right;\x22>Credit\x20(−)</th></tr></thead><tbody>', 'Go\x20ahead\x20if\x20the\x20purpose\x20is\x20productive.\x20Make\x20sure\x20the\x20repayment\x20fits\x20inside\x20your\x20daily\x20cap\x20without\x20pushing\x20you\x20into\x20moderate\x20risk.', '\x20per\x20day\x20after\x20this.', 'sidebar-avatar', 'How\x20much\x20can\x20I\x20spend\x20today', 'safeCash', 'projection', '</div>', 'summarize', 'compare', '<tr><td\x20colspan=\x224\x22\x20style=\x22padding:32px;text-align:center;color:var(--win-text-3);\x22>No\x20transactions\x20recorded\x20yet.</td></tr>', '\x20on\x20what\x20sounds\x20like\x20a\x20real\x20obligation\x20—\x20and\x20I\x27m\x20not\x20going\x20to\x20pretend\x20that\x27s\x20easy\x20to\x20hear\x20—\x20but\x20right\x20now\x20your\x20free\x20cash\x20is\x20already\x20negative\x20at\x20KSh\x20', '<span\x20class=\x22chip\x20chip-red\x22>', 'medical', 'setup-overlay', 'toLocaleString', 'tuition', 'equipment', 'unit\x20trust', 'worker', 'wage', 'slice', 'ask', '\x20in\x20free\x20cash\x20after\x20obligations,\x20', '\x20available\x20and\x20', 'Treat\x20KSh\x20', '\x20back\x20within\x2030\x20days.', 'custom-alert', 'style', 'display-name', 'Your\x20current\x20financial\x20position:\x20buffer\x20is\x20KSh\x20', 'Go\x20ahead.\x20Just\x20make\x20sure\x20you\x20track\x20what\x20you\x20bought,\x20at\x20what\x20price,\x20and\x20set\x20a\x20target\x20selling\x20price\x20before\x20the\x20goods\x20hit\x20the\x20shelf.', 'atm', '\x20free\x20cash.', 'innerWidth', 'At\x20', '<div\x20class=\x22win-card\x22><div\x20class=\x22win-card-header\x22><div\x20class=\x22win-card-title\x22>Mandatory\x20Reserve\x20Schedule</div><button\x20onclick=\x22document.getElementById(\x27setup-overlay\x27).style.display=\x27flex\x27\x22\x20class=\x22btn-secondary\x22\x20style=\x22font-size:11px;padding:5px\x2010px;\x22>Edit\x20List</button></div><div>', '\x22\x20class=\x22win-input\x22\x20style=\x22width:110px;\x22><button\x20onclick=\x22this.parentElement.remove()\x22\x20style=\x22width:28px;height:28px;border-radius:50%;border:1px\x20solid\x20rgba(196,43,28,0.3);background:rgba(196,43,28,0.05);color:var(--win-red);cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;\x22>×</button>', 'getContext', '10EoXWms', '11,500', '\x20from\x20your\x20account', '<div\x20class=\x22win-card\x22\x20style=\x22height:520px;display:flex;flex-direction:column;\x22><div\x20class=\x22win-card-header\x22\x20style=\x22flex-shrink:0;\x22><div\x20style=\x22display:flex;align-items:center;gap:10px;\x22><div\x20style=\x22width:32px;height:32px;background:linear-gradient(135deg,#0078D4,#005A9E);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:16px;\x22>🤖</div><div><div\x20class=\x22win-card-title\x22>Travis\x20AI\x20Advisor</div><div\x20class=\x22win-card-sub\x22>Probability\x20engine\x20&\x20leak\x20finder\x20active</div></div></div><span\x20class=\x22chip\x20chip-green\x22\x20style=\x22font-size:10px;\x22>●\x20Online</span></div><div\x20id=\x22chat-box\x22\x20style=\x22flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;background:var(--win-bg);\x22><div\x20class=\x22travis-label\x22><span>🤖</span>\x20Travis</div><div\x20class=\x22chat-bubble-ai\x22\x20style=\x22font-size:13px;\x22>Probability\x20Engine\x20and\x20Leak\x20Finder\x20active.\x20How\x20can\x20I\x20protect\x20your\x20capital\x20today?</div></div><div\x20style=\x22padding:10px\x2014px;border-top:1px\x20solid\x20var(--win-border);background:white;display:flex;gap:8px;align-items:center;\x22><input\x20id=\x22chat-input\x22\x20type=\x22text\x22\x20placeholder=\x22Ask\x20Travis\x20anything\x20about\x20your\x20finances…\x22\x20class=\x22win-input\x22\x20style=\x22flex:1;\x22><button\x20onclick=\x22handleAsk()\x22\x20class=\x22btn-accent\x22\x20style=\x22padding:9px\x2018px;font-size:13px;\x22>Send\x20↗</button></div></div>', 'rgba(0,0,0,0.04)', '\x20STRATEGY\x20ENGINE', 'selling\x20price', 'scrollHeight', 'upcountry', 'make\x20more', '672arwDDN', 'how\x20am\x20i', 'what\x20should\x20i\x20charge', '\x20days\x20until\x20month\x20end.', ',\x20risk\x20is\x20', 'buy\x20goods', 'score', '</span></div><span\x20style=\x22color:var(--color-border-secondary);font-size:11px;\x22>·</span><div\x20style=\x22display:flex;align-items:center;gap:5px;white-space:nowrap;\x22><span\x20style=\x22color:var(--color-text-secondary);font-size:12px;\x22>Buffer</span><span\x20style=\x22font-weight:500;color:var(--color-text-primary);\x22>KSh\x20', 'machine', 'length', '</div></div>', 'paid', '</div><div\x20class=\x22metric-value\x22>', 'reserve', 'chat-input', 'saving', 'cashflow', '</td></tr>', 'querySelectorAll', 'textContent', 'push', 'join', 'LIABILITIES', 'stocks', 'You\x27re\x20in\x20good\x20shape.\x20Keep\x20your\x20daily\x20spend\x20under\x20KSh\x20', 'repeat(4,1fr)', '\x20per\x20month,\x20this\x20hire\x20sits\x20within\x20your\x20safe\x20wage\x20budget\x20of\x20KSh\x20', 'trim', 'Sales\x20Revenue', 'seg-btn', 'Salary', 'overdraft', 'innerText', 'obsStatus', '\x20free,\x20and\x20your\x20daily\x20cap\x20adjusts\x20to\x20about\x20KSh\x20', 'pending', 'Only\x20withdraw\x20what\x20you\x20have\x20a\x20specific,\x20immediate\x20purpose\x20for.', 'make\x20money', 'Tax', 'end\x20the\x20month\x20with\x20roughly\x20KSh\x20', 'shares', 'value', 'How\x20am\x20I\x20doing\x20this\x20month', 'Accounts\x20Payable', 'doctor', 'how\x20is', 'custom-alert-ok', 'add', 'What\x20expenses\x20should\x20I\x20cut\x20right\x20now?', 'name', 'M-Pesa', 'Medical', 'income\x20situation', 'help-modal', '\x20per\x20month.', 'var(--color-text-warning)', 'Bank\x20/\x20M-Pesa', '\x20right\x20now.', '<div\x20class=\x22obs-row\x22><div><div\x20style=\x22font-size:13px;font-weight:600;\x22>', 'Clothes', '</tbody></table></div></div>', 'Withdrawing\x20KSh\x20', '🛡\x20STABLE', 'tpin', '\x20but\x20your\x20entire\x20free\x20cash\x20buffer\x20is\x20only\x20KSh\x20', 'ASSETS', 'getElementById', 'Buying\x20equipment\x20for\x20KSh\x20', 'optgroup', 'cousin', '\x20—\x20that\x27s\x2050%\x20of\x20your\x20buffer.\x20Keep\x20the\x20other\x20half\x20liquid.\x20Turning\x20over\x20smaller\x20stock\x20faster\x20is\x20safer\x20than\x20betting\x20everything\x20on\x20one\x20big\x20order.', 'faidi', 'You\x20can\x20stretch\x20it\x20this\x20once,\x20but\x20log\x20it\x20and\x20don\x27t\x20do\x20this\x20two\x20days\x20in\x20a\x20row.', 'dead-overlay', 'pin', 'amount', 'clock-date', 'display:flex;gap:8px;align-items:center;', 'riskLabel', 'buy\x20stock', 'profit', 'destroy', '\x20active', 'nhif', '10,000', 'What\x20should\x20I\x20cut', 'getFullYear', 'fall\x20short\x20by\x20KSh\x20', 'setItem', '</div><div\x20style=\x22padding:16px;border-top:1px\x20solid\x20var(--win-border);\x22><button\x20onclick=\x22hardReset()\x22\x20style=\x22font-size:11px;color:var(--win-red);background:none;border:none;cursor:pointer;font-family:inherit;\x22>Reset\x20Demo\x20Data</button></div></div>', 'How\x20can\x20I\x20increase\x20my\x20profit\x20this\x20month?', 'display-mode', 'pattern', 'new\x20person', '<button\x20onclick=\x22document.getElementById(\x27chat-input\x27).value=\x27', 'chip-red', 'Investing\x20is\x20smart\x20—\x20but\x20the\x20sequence\x20matters.\x20Before\x20putting\x20money\x20into\x20shares,\x20SACCOs,\x20or\x20crypto,\x20your\x20operating\x20cash\x20needs\x20to\x20be\x20healthy.\x20Your\x20buffer\x20right\x20now\x20is\x20KSh\x20', '#5a5a5a', 'Looking\x20at\x20your\x20numbers\x20right\x20now:\x20you\x20have\x20KSh\x20', ',\x20you\x27d\x20be\x20repaying\x20roughly\x20KSh\x20', 'stringify', 'chip\x20', '2-digit', 'parents', '<input\x20type=\x22text\x22\x20placeholder=\x22e.g.\x20Rent\x22\x20value=\x22', 'debit', '4476798nXEueD', 'treatment', 'Loans\x20Payable', 'icon', 'max', 'CRITICAL', 'sacco', 'Credit', 'Allowance', 'spend', 'charAt', 'Cost\x20of\x20Goods\x20Sold', 'Look\x20at\x20your\x20biggest\x20monthly\x20outflow\x20and\x20ask\x20whether\x20you\x20can\x20reduce\x20it\x20by\x2010–15%.', 'price', 'fuliza', 'tell\x20me\x20about', 'obligations', 'toggle', 'MODERATE', 'Transport', 'travisChart', 'treat', 'btn-p', 'Restock\x20at\x20a\x20maximum\x20of\x20KSh\x20', '<div\x20style=\x22display:flex;flex-wrap:wrap;gap:8px;margin-top:14px;\x22>', 'dash', '</div><div\x20style=\x22display:flex;gap:6px;margin-top:4px;\x22><span\x20class=\x22chip\x20chip-green\x22\x20style=\x22font-size:10px;\x22>', 'Before\x20deciding,\x20calculate\x20exactly\x20what\x20you\x27ll\x20use\x20the\x20loan\x20for\x20and\x20whether\x20it\x20pays\x20back\x20more\x20than\x20115%\x20of\x20what\x20you\x20borrow.', 'floor', 'appendChild', 'var(--color-text-success)', 'matatu', '<div\x20class=\x22leak-item\x22><div><div\x20style=\x22font-size:13px;font-weight:500;\x22>', 'daysRem', '\x20next\x20month\x20—\x20that\x27s\x20about\x20KSh\x20', 'which\x20is\x20better', 'income', 'hud-cap', '\x20days\x20would\x20each\x20have\x20roughly\x20KSh\x20', 'returns', '796102UIXnQm', 'What\x20loan\x20repayment\x20can\x20I\x20afford\x20per\x20month?', 'rent', 'obligation-list', 'body', '%\x20of\x20your\x20buffer,\x20leaving\x20you\x20KSh\x20', 'chip-green', '\x20each.', 'Avoid\x20the\x20loan\x20right\x20now.\x20Instead,\x20identify\x20one\x20income\x20you\x20can\x20accelerate\x20this\x20week\x20—\x20collect\x20a\x20debt\x20someone\x20owes\x20you,\x20push\x20a\x20sale,\x20reduce\x20what\x20you\x20spend\x20—\x20before\x20adding\x20any\x20new\x20repayment\x20obligation.', '</span></div><span\x20style=\x22color:var(--color-border-secondary);font-size:11px;\x22>·</span><div\x20style=\x22display:flex;align-items:center;gap:5px;white-space:nowrap;\x22><span\x20style=\x22color:var(--color-text-secondary);font-size:12px;\x22>Daily\x20cap</span><span\x20style=\x22font-weight:500;color:var(--color-text-primary);\x22>KSh\x20', '\x22><span\x20style=\x22width:6px;height:6px;border-radius:50%;background:', 'Other\x20Fun\x20Spending', 'inventory', ',\x20and\x20you\x20have\x20', 'This\x20is\x20the\x20wrong\x20time\x20for\x20a\x20capital\x20purchase.\x20Your\x20operating\x20position\x20is\x20critical\x20—\x20protect\x20cash\x20liquidity\x20first.', 'Reserved\x20Bills', 'chama', 'getMonth', '\x20borrowed\x20becomes\x20KSh\x20', ',\x20which\x20means\x20you\x27re\x20already\x20spending\x20money\x20you\x20don\x27t\x20have.\x20Paying\x20this\x20now\x20would\x20deepen\x20the\x20hole.', 'Spend', 'lease', 'set\x20aside', 'pay\x20for', 'hud-warning', '\x20to\x20manage\x20the\x20next\x20', 'Start\x20with\x20a\x20margin\x20audit:\x20check\x20your\x20top\x205\x20products\x20and\x20identify\x20which\x20ones\x20actually\x20make\x20money\x20after\x20cost.', 'var(--win-red)', 'future', 'className', 'staff', '\x20Reserved', 'mshwari', '\x20—\x20which\x20', '\x20remaining\x20after\x20purchase.', 'settings', '</div></div><div><div\x20class=\x22travis-label\x22><span>🤖</span>\x20Travis</div><div\x20class=\x22chat-bubble-ai\x22>', 'view-port', 'numeric', 'itax', 'family', 'How\x20to\x20make\x20more\x20profit', 'This\x20is\x20a\x20real\x20emergency\x20position.\x20Stop\x20all\x20non-essential\x20spending\x20today,\x20call\x20in\x20any\x20debts\x20owed\x20to\x20you.', '\x20over</div>', 'Bills', 'next\x20week', 'markup', '\x20to\x20protect\x20liquidity.', 'some', 'can\x20i\x20buy', '<div\x20style=\x22margin-top:16px;padding:12px\x2014px;border-left:3px\x20solid\x20', 'Either\x20negotiate\x20the\x20wage\x20down\x20to\x20KSh\x20', 'afford', 'Only\x20take\x20this\x20loan\x20if\x20it\x20will\x20generate\x20at\x20least\x20KSh\x20', 'dashboard-grid', 'Rent', '\x20is\x20bigger\x20than\x20your\x20current\x20daily\x20safe\x20limit\x20of\x20KSh\x20', 'type', 'Savings', 'School', 'eat', 'versus', 'Pricing\x20is\x20where\x20most\x20small\x20businesses\x20lose\x20quietly\x20—\x20not\x20through\x20big\x20mistakes,\x20but\x20through\x20margins\x20that\x20are\x20too\x20thin.\x20The\x20minimum\x20healthy\x20markup\x20for\x20a\x20retail\x20duka\x20or\x20small\x20business\x20in\x20Kenya\x20is\x2025–30%\x20above\x20cost\x20price.', 'Other\x20Revenue', '</span></div></div>', ',\x20avoid\x20any\x20large\x20discretionary\x20buys\x20this\x20week.', 'You\x20need\x20to\x20actively\x20cut\x20at\x20least\x20one\x20category\x20of\x20non-essential\x20spending\x20this\x20week\x20and\x20look\x20for\x20one\x20way\x20to\x20bring\x20in\x20extra\x20cash.', '167541GiNerQ', 'toLocaleTimeString', '\x20days.', 'get', 'stock', 'fees', 'tx-modal', 'At\x20KSh\x20', '</div><div\x20style=\x22font-size:11px;color:var(--win-text-3);\x22>Budget:\x20KSh\x20', 'addEventListener', 'sick', 'Fixed\x20Assets', 'drinking', 'is\x20still\x20comfortable', 'scrollTop', 'If\x20your\x203-month\x20emergency\x20fund\x20is\x20already\x20covered,\x20you\x20can\x20start\x20investing\x20up\x20to\x2010–15%\x20of\x20your\x20monthly\x20surplus.\x20Start\x20with\x20a\x20SACCO\x20if\x20you\x20don\x27t\x20have\x20one.', '#0078D4', 'tx-credit', 'Inter', ';gap:16px;align-items:start;\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;flex-direction:column;gap:12px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22win-card-header\x22><div\x20class=\x22win-card-title\x22>Insolvency\x20Risk</div><span\x20class=\x22chip\x20', 'how\x20to\x20improve', 'short', 'hud-cover', '\x20/\x20', 'Buying\x20equipment\x20is\x20a\x20capital\x20decision,\x20not\x20an\x20expense\x20—\x20you\x27re\x20converting\x20cash\x20into\x20something\x20that\x20should\x20earn\x20its\x20keep.\x20Your\x20buffer\x20is\x20KSh\x20', 'earn\x20more', 'createElement', 'Marketing', 'desc', '\x27;handleAsk();\x22\x20style=\x22font-size:12px;padding:5px\x2012px;border-radius:var(--border-radius-md);border:0.5px\x20solid\x20var(--color-border-secondary);background:transparent;color:var(--color-text-secondary);cursor:pointer;\x22>', '94422wltnQr', '\x20per\x20month,\x20put\x20it\x20somewhere\x20it\x20earns\x20interest\x20(money\x20market\x20fund,\x20SACCO),\x20and\x20treat\x20it\x20as\x20a\x20fixed\x20expense.', 'block', '.\x20Your\x20insolvency\x20risk\x20is\x20', ',\x20daily\x20safe\x20spend\x20is\x20KSh\x20', 'conclusion', 'reorder', '</strong></div><div\x20style=\x22font-size:13px;color:var(--win-text-2);margin-top:4px;\x22>Transactions\x20used:\x20<strong>', '\x20for\x20an\x20obligation\x20is\x20a\x20legitimate\x20expense,\x20and\x20your\x20buffer\x20can\x20absorb\x20it.\x20After\x20paying\x20this,\x20you\x27ll\x20still\x20have\x20KSh\x20', 'min', 'map', '#107C10', 'How\x20can\x20I\x20increase\x20my\x20income\x20without\x20a\x20loan?', 'show', 'Give\x20me\x20a\x20full\x20status\x20summary', 'Can\x20I\x20afford\x20repayments', 'education', '<tr><td\x20style=\x22font-family:monospace;font-size:11px;color:var(--win-text-3);white-space:nowrap;\x22>', 'Family\x20obligations\x20—\x20harambees,\x20upcountry\x20contributions,\x20chama\x20—\x20are\x20a\x20real\x20part\x20of\x20life\x20in\x20Kenya\x20and\x20ignoring\x20them\x20has\x20social\x20consequences\x20that\x20go\x20beyond\x20money.\x20Your\x20buffer\x20is\x20KSh\x20', 'What\x20should\x20I\x20do\x20today', '</strong></div><div\x20style=\x22font-size:13px;color:var(--win-text-2);margin-top:4px;\x22>Type:\x20<strong\x20style=\x22text-transform:capitalize;\x22>', 'LOW', '\x22\x20class=\x22win-input\x22\x20style=\x22flex:1;\x22><input\x20type=\x22number\x22\x20placeholder=\x22Amount\x22\x20value=\x22', 'key', '%;background:', 'If\x20your\x20stock\x20moves\x20fast\x20(within\x207\x20days),\x20go\x20ahead\x20but\x20no\x20more\x20than\x20KSh\x20', '<div\x20class=\x22metric-card\x22><div\x20class=\x22metric-accent\x22\x20style=\x22background:', 'How\x20much\x20can\x20I\x20safely\x20spend\x20today?', 'header-verdict-badge', 'If\x20this\x20asset\x20pays\x20back\x20within\x2060–90\x20days,\x20go\x20ahead.\x20Just\x20make\x20sure\x20you\x20have\x20at\x20least\x20KSh\x20', 'tx-counter-pill', 'harambee', '\x20in\x20free\x20cash.\x20That\x27s\x20responsible\x20purchasing\x20—\x20you\x27re\x20not\x20over-leveraging\x20your\x20cash\x20into\x20goods.', 'classList', '8ndZmZM', 'toUpperCase', '\x20would\x20push\x20you\x20past\x20your\x20safe\x20daily\x20limit\x20of\x20KSh\x20', 'getDate', '\x20and\x20represents\x20just\x20', 'restock', 'DISCRETIONARY', '\x20for\x20restocking\x20sits\x20at\x20a\x20healthy\x20', 'gridTemplateColumns', 'Can\x20I\x20hire\x20someone\x20at\x20KSh\x208000\x20per\x20month?', 'vehicle', '<span\x20class=\x22chip\x20chip-green\x22>Clean</span>', 'Wanting\x20to\x20grow\x20the\x20team\x20shows\x20ambition,\x20and\x20that\x27s\x20good.\x20But\x20right\x20now\x20your\x20buffer\x20is\x20KSh\x20', '</span></div><span\x20style=\x22color:var(--color-border-secondary);font-size:11px;\x22>·</span><div\x20style=\x22display:flex;align-items:center;gap:5px;white-space:nowrap;\x22><span\x20style=\x22color:var(--color-text-secondary);font-size:12px;\x22>Days\x20left</span><span\x20style=\x22font-weight:500;color:var(--color-text-primary);\x22>', 'goods', 'doing', 'My\x207-day\x20forecast', 'asset', 'How\x20much\x20should\x20I\x20set\x20aside\x20for\x20taxes\x20each\x20month?', 'color', 'loan', '%\x20of\x20your\x20KSh\x20', 'Bank\x20Account', '</span></div></td><td\x20style=\x22text-align:right;font-family:monospace;color:var(--win-green);font-weight:600;white-space:nowrap;\x22>+', 'This\x20is\x20a\x20real\x20obligation\x20—\x20rent,\x20fees,\x20medical,\x20those\x20don\x27t\x20move.\x20The\x20issue\x20is\x20that\x20KSh\x20', 'var(--color-text-danger)', 'take\x20out', 'coming\x20week', '11ITLsyk', 'invest', 'Daily\x20Ceiling', '<div\x20style=\x22font-size:14px;font-weight:700;color:var(--win-yellow);\x22>KSh\x20', 'innerHTML', 'tax', '<div\x20style=\x22text-align:right;\x22><div\x20class=\x22chat-bubble-user\x22>', 'removeItem', '1fr', 'pricing', 'you\x20have\x20KSh\x20', 'Your\x20safe\x20daily\x20spending\x20limit\x20is\x20KSh\x20', '\x20Cash\x20has\x20a\x20way\x20of\x20disappearing\x20faster\x20than\x20mobile\x20money.', '\x20·\x20Spent:\x20KSh\x20', 'tx-amount', 'tempType', 'reduce', 'reload', '#8a8a8a', '\x20is\x20a\x20capital\x20decision\x20—\x20it\x20comes\x20out\x20of\x20your\x20buffer\x20in\x20one\x20hit,\x20which\x20is\x20', 'Dividends', 'You\x27re\x20asking\x20about\x20spending\x20KSh\x20', 'cash', 'NECESSARY\x20EXPENSES', '.taskbar-btn', 'How\x20to\x20increase\x20income', '\x20left', 'Inventory', 'should\x20i', 'Help\x20me\x20calculate\x20the\x20right\x20selling\x20price\x20for\x20a\x20product', 'I\x20hear\x20you\x20on\x20the\x20loan\x20—\x20when\x20things\x20are\x20tight,\x20borrowing\x20feels\x20like\x20the\x20fastest\x20fix.\x20But\x20your\x20account\x20is\x20already\x20in\x20critical\x20risk\x20territory\x20with\x20a\x20buffer\x20of\x20KSh\x20', 'resize', 'conversationCount', 'chat-box', ',\x20a\x20safe\x20wage\x20budget\x20is\x20around\x20KSh\x20', 'is\x20tighter\x20than\x20before,\x20so\x20watch\x20the\x20small\x20daily\x20spends\x20this\x20week', 'Profit\x20growth\x20in\x20a\x20small\x20', ',\x20and\x20adding\x20a\x20loan\x20repayment\x20on\x20top\x20of\x20that\x20is\x20like\x20patching\x20a\x20leaking\x20roof\x20while\x20standing\x20in\x20a\x20flood.', 'margin', 'getItem', 'Go\x20ahead\x20and\x20pay\x20it.\x20Log\x20it\x20immediately\x20and\x20recalculate\x20your\x20budget\x20for\x20the\x20remaining\x20', 'freezer', '</div><div\x20style=\x22font-size:10px;color:var(--win-text-3);\x22>remaining</div>', 'setDate', '#6B46C1', 'tx-limit-warn', 'Loan\x20Repayment', '\x20leak', 'btn-b', 'abs', 'match', 'from', 'Petty\x20Cash', 'money\x20in', '%\x20of\x20your\x20free\x20cash.\x20The\x20problem\x20with\x20tying\x20up\x20that\x20much\x20in\x20stock\x20is\x20that\x20it\x20assumes\x20your\x20sales\x20velocity\x20is\x20high\x20enough\x20to\x20convert\x20those\x20goods\x20to\x20cash\x20before\x20your\x20next\x20major\x20obligation\x20falls\x20due.', 'Side\x20Hustle', 'mobile-open', 'credit', '\x20is\x20above\x20your\x20safe\x20daily\x20cap\x20of\x20KSh\x20', 'active', 'branch', 'KSh\x20', '</td><td><div\x20style=\x22font-size:13px;font-weight:500;\x22>', 'analyticsChart', 'personal', ',\x20you\x20have\x20room\x20to\x20start\x20saving.\x20A\x20realistic\x20savings\x20rate\x20at\x20your\x20current\x20position\x20is\x20around\x20', 'chip\x20chip-red', 'parentNode', 'Restocking\x20KSh\x20', 'A\x20loan\x20is\x20possible\x20from\x20a\x20cashflow\x20standpoint,\x20but\x20only\x20if\x20it\x27s\x20going\x20to\x20earn\x20more\x20than\x20it\x20costs.\x20Mobile\x20loans\x20at\x2015%\x20monthly\x20mean\x20KSh\x20', 'round', 'sidebar-name', 'chip-yellow', 'Calculate\x20markup\x20for\x20an\x20item', 'withdraw', 'Please\x20enter\x20a\x20name\x20and\x20select\x20a\x20profile\x20type.', 'Other\x20Income', 'till', 'fridge', 'toDateString', ';display:inline-block;\x22></span>\x20', 'Your\x20financials\x20are\x20in\x20a\x20stable\x20position\x20right\x20now\x20—\x20buffer\x20is\x20healthy\x20and\x20risk\x20is\x20low.\x20', 'toLocaleDateString', ';background:var(--color-background-secondary);border-radius:0\x20var(--border-radius-md)\x20var(--border-radius-md)\x200;\x22><div\x20style=\x22font-size:11px;font-weight:500;color:var(--color-text-secondary);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:4px;\x22>My\x20advice</div><div\x20style=\x22font-size:15px;color:var(--color-text-primary);line-height:1.6;\x22>', 'variance', 'Cash', 'Travel\x20(fun)', '\x20Days', 'tx-modal-counter', 'This\x20is\x20fine.\x20Go\x20ahead,\x20log\x20it,\x20and\x20you\x27re\x20still\x20on\x20track.', 'kra', 'forEach', 'includes', '12800PzZvhd', 'Show\x20me\x20my\x207-day\x20cash\x20forecast', '<div\x20class=\x22win-card\x22><div\x20class=\x22win-card-header\x22><div\x20class=\x22win-card-title\x22>Settings\x20&amp;\x20Profile</div></div><div\x20class=\x22win-card-body\x22\x20style=\x22display:grid;gap:12px;\x22><div\x20class=\x22setup-step\x22><div\x20class=\x22setup-step-title\x22>👤\x20Profile\x20Information</div><div\x20style=\x22font-size:13px;color:var(--win-text-2);\x22>Name:\x20<strong>', ',\x20which\x20means\x20paying\x20it\x20in\x20full\x20today\x20will\x20eat\x20', 'Accounts\x20Receivable', 'var(--win-text)', 'where\x20do\x20i', 'Should\x20I\x20take\x20a\x20loan\x20to\x20buy\x20equipment?', 'Food\x20&\x20Groceries', '\x20—\x20so\x20this\x20would\x20wipe\x20you\x20out\x20completely\x20and\x20leave\x20nothing\x20for\x20wages,\x20rent,\x20or\x20emergencies.', 'pay\x20rent', '%,\x20which\x20would\x20be\x20KSh\x20', 'label', 'cash\x20flow', '\x20transaction', '#9D5D00', '\x20is\x20possible\x20from\x20a\x20cash\x20standpoint\x20since\x20your\x20buffer\x20covers\x20it,\x20but\x20it\x20would\x20consume\x20', '300px\x201fr'];
    _0x3540 = function() {
        return _0x16c28e;
    };
    return _0x3540();
}
setInterval(updateClock, 0x3e8), updateClock(), window[_0x6107cf(0xa5)](_0x6107cf(0x117), () => {
    const _0x158958 = _0x6107cf,
        _0x2cb87a = document[_0x158958(0x213)](_0x158958(0x299));
    _0x2cb87a && (_0x2cb87a[_0x158958(0x1bc)][_0x158958(0xe4)] = window['innerWidth'] < 0x258 ? _0x158958(0x17e) : _0x158958(0x1ea));
}), window[_0x6107cf(0x189)] = boot;
