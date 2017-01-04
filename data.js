const globby = require('globby');
const join = require('path').join;

function onlyFilenames(arr) {
  return arr.map(el =>
                 el.indexOf('/') === -1
                 ? el
                 : el.substring(el.lastIndexOf('/') + 1, el.length));
}

// Paths
const root = process.env.ROOT ? join('/', process.env.ROOT) : '/'; // must be set in console
const img = 'img';
const icons = join(img, 'icons');

const scripts = 'assets';
const styles = 'assets';

// Pages
const pages = [
  {url: '/', name: 'Inicio'}
].map(p => {
  p.url = join(root, p.url);
  return p;
});

module.exports = {
  site: {
    root,
    url: "https://github.com/aboglioli/metalsmith-base",
    title: "Metalsmith Base",
    author: "IDEE",
    logo: 'logo.png'
  },
  assets: {
    img: join(root, img),
    icons: join(root, icons),
    scripts: join(root, scripts),
    styles: join(root, styles)
  },
  files: {
    brandIcons: onlyFilenames(globby.sync(['./sources/img/icons/brands/*']))
  },
  pages,
  contact: [
    {icon: 'envelope', text: 'alan.boglioli@gmail.com'},
    {icon: 'phone', text: `261 555999`}
  ]
}
