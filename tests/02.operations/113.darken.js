const join = require('path').join,
    assert = require('assert'),
    mkdirp = require('mkdirp'),
    lwip = require('../../'),
    imgs = require('../imgs');

const tmpDir = join(__dirname, '../results');
    basename = 'darken';
let current;

describe('lwip.darken', () => {

    let image;

    before(done => {
        mkdirp(tmpDir, done);
    });

    beforeEach(done => {
        lwip.open(imgs.png.trans, (err, img) => {
            image = img;
            done(err);
        });
    });

    beforeEach(() => {
        current = [basename];
    });

    afterEach(done => {
        image.writeFile(join(tmpDir, current.join('_') + '.jpg'), 'jpeg', {
            quality: 100
        }, done);
    });

    describe('delta=0', () => {
        const d = 0;
        it('should succeed', done => {
            current.push('d' + d);
            image.darken(d, done);
        });
    });

    describe('delta=0.5', () => {
        const d = 0.5;
        it('should succeed', done => {
            current.push('d' + d);
            image.darken(d, done);
        });
    });

    describe('delta=-0.5', () => {
        const d = -0.5;
        it('should succeed', done => {
            current.push('d' + d);
            image.darken(d, done);
        });
    });

});
