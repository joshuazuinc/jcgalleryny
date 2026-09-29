(function () {
  const U = 'https://jcgalleryny.com/wp-content/uploads/';
  const artists = [
    { id: 'jay-chung', name: 'Jay Chung', portrait: U + '2024/04/jaychung.jpeg', web: 'jaychungart.com',
      bio: [
        'Jay Chung attained his BA in Graphic Design from the ChungAng University in 1979 and attended the Seoul National University Graduate School to study Graphic Design. He then came to America and received his M.A.’s in Communication Design and Computer Graphic from the Pratt Institute in 1984 and 1995, respectively. He has exhibited at the Myungdong Int’l Art Festival in Seoul, Korea, and had a solo exhibition at the Art Expo New York in 2019. He also exhibited at the Galleria Larkina in Venice, Italy, and the Riverside Gallery.'
      ],
      statement: '“I have been trying to relay the message of encouragement in vitality, ‘Recharge Life’ using bright and bold colors. I think colored resin is the perfect medium to express strongly those concepts visually.”',
      education: [
        ['1979', 'ChungAng Univ. (Graphic Design) B.A. Seoul, Korea'],
        ['1980–81', 'Seoul University (Graphic Design) Graduate School'],
        ['1984', 'NY Pratt Institute (Communication Design) M.A.'],
        ['1995', 'NY Pratt Institute (Computer Graphics Design) M.A.'],
        ['2006', 'Dartmouth Univ. Tuck School MBDA Business Management program'],
        ['2007', '“Ellis Island Medalist” awarded']
      ],
      exhibitions: [
        ['2024.05', 'Affordable Int’l Art Fair, Austin, TX, USA'],
        ['2024.04', 'Artexpo NY, Manhattan NY'],
        ['2024.03', 'Rome International Art Fair, Italy'],
        ['2024.02', 'Venice International Art Fair 2024, Italy'],
        ['2024.01', 'London Contemporary Art Fair, London, England'],
        ['2023.12', 'K-ART Int’l Art Festival, Lotte Hotel, Seoul, Korea'],
        ['2023.10', 'Riverside Gallery Solo Exhibition, NJ'],
        ['2023.06', 'Insa Art Gallery Solo Exhibition, Seoul, Korea'],
        ['2023.04', 'Artexpo NY – 2023 Best Solo Exhibitor Award'],
        ['2022.06', 'KIAF Seoul & Frieze Exhibition'],
        ['2021.12', 'Artexpo Miami (Whole Booth)'],
        ['2019.08', 'Galleria Larkina, Venice, Italy']
      ] },
    { id: 'sarah-helqa', name: 'Sarah Helqa', portrait: U + '2024/07/sarahh-740x474.jpg' },
    { id: 'hoya-chung', name: 'Hoya Chung', portrait: U + '2024/04/hoya-740x474.jpeg' },
    { id: 'gregoire-devin', name: 'Gregoire Devin', portrait: U + '2023/12/gregoire-740x474.jpg' },
    { id: 'soo-kim', name: 'Soo Kim', portrait: U + '2024/04/sookim-740x474.jpg' },
    { id: 'sehyun-jeon', name: 'Sehyun Jeon', portrait: U + '2024/04/sehyun-740x474.jpg' }
  ];
  const works = [
    { id: 'diary-of-times', title: 'Diary of Times', artist: 'jay-chung', img: U + '2026/05/Diary-of-times-Mixed-media-in-resin-24x24-in-2026.jpg', medium: 'Mixed media in resin on canvas', size: '24 x 24 in.', year: '2026' },
    { id: 'ocean-world-2', title: 'Ocean World-2', artist: 'jay-chung', img: U + '2026/05/ocean-world-2-mixed-media-in-epoxy-resin-30x24-in-2026.jpg', medium: 'Mixed media in epoxy resin', size: '30 x 24 in.', year: '2026' },
    { id: 'time-valley', title: 'Time Valley', artist: 'jay-chung', img: U + '2026/05/Time-valley-18x18-in-mixed-media-on-canvas-2026.jpg', medium: 'Mixed media on canvas', size: '18 x 18 in.', year: '2026' },
    { id: 'share-your-love', title: 'Share Your Love', artist: 'sarah-helqa', img: U + '2024/07/Share-Your-Love-1050x658.jpg' },
    { id: 'free-spirit', title: 'Free Spirit', artist: 'jay-chung', img: U + '2026/05/Free-spirit-20x20-in-mixed-media-in-resin-2026.jpg', medium: 'Mixed media in resin', size: '20 x 20 in.', year: '2026' },
    { id: 'allegory', title: 'Allegory Of The Creation', artist: 'gregoire-devin', img: U + '2024/12/gregoireimg06-1000x658.webp' },
    { id: 'tears-of-two-suns', title: 'Tears of Two Suns', artist: 'hoya-chung', img: U + '2024/04/hoya-art10-1000x658.jpg' },
    { id: 'roses', title: 'Roses', artist: 'jay-chung', img: U + '2026/05/Roses-11.5x9.5-acrylic-in-resin-2026.jpg', medium: 'Acrylic in resin', size: '11.5 x 9.5 in.', year: '2026' },
    { id: 'flower-with-vases', title: 'Flower with Vases', artist: 'jay-chung', img: U + '2025/09/Flower-with-vases-883x658.jpg' },
    { id: 'outdoor-in-blue-sky', title: 'Outdoor in Blue Sky', artist: 'jay-chung', img: U + '2026/05/outdoor-in-blue-sky-mixed-media-on-canvas-18x16-in-2026.jpg', medium: 'Mixed media on canvas', size: '18 x 16 in.', year: '2026' },
    { id: 'chosun-ceramic', title: 'Chosun Ceramic', artist: 'jay-chung', img: U + '2024/04/jay-art1-1170x658.jpeg' },
    { id: 'passion-driving', title: 'Passion Driving', artist: 'jay-chung', img: U + '2024/04/jay05-370x208.jpg' }
  ];
  const hero = [
    U + 'elementor/thumbs/jay01-qn39yk0c0rsl0psigoxe69y8wbc15k1f97f2wq1yls.jpg',
    U + 'elementor/thumbs/hoya-art3-qmk37vo1x76sy20ydxnkzan0ew0kgd24el43qw4fhs.jpeg',
    U + 'elementor/thumbs/soo02-qmt6rhgx0x0aje27ox5y9q3ifcoxo4wyxm5o50lb3k.jpg',
    U + 'elementor/thumbs/sehyun-art3-qmk1d8vxfzz1x6tbh4ro83yofkfussj4ks8z0qx4kw.jpg',
    U + 'elementor/thumbs/gregoireimg07-qylupeyq6ah4vwu97mevuss2rx2oynick1xr37jgxc.jpg'
  ];
  const byId = {};
  artists.forEach(a => (byId[a.id] = a));
  works.forEach(w => (w.artistName = byId[w.artist].name));
  window.JCG = { artists, works, hero, byId };
})();

// Shared view-model helper for all three designs
window.JCGView = function (logic) {
  const D = window.JCG || { artists: [], works: [], hero: [], byId: {} };
  const s = logic.state;
  const go = (page, id) => () => { logic.setState({ page, id }); window.scrollTo(0, 0); };
  const artist = D.byId[s.page === 'artist' ? s.id : 'jay-chung'] || D.artists[0] || {};
  const work = D.works.find(w => w.id === s.id) || D.works[0] || {};
  const wi = D.works.indexOf(work);
  const n = D.works.length || 1;
  const pad = i => String(i + 1).padStart(2, '0');
  const artists = D.artists.map((a, i) => ({ ...a, num: pad(i), open: go('artist', a.id), count: D.works.filter(w => w.artist === a.id).length }));
  const works = D.works.map((w, i) => ({ ...w, num: pad(i), open: go('work', w.id), openArtist: go('artist', w.artist) }));
  const artistWorks = works.filter(w => w.artist === artist.id);
  const meta = [['Artist', work.artistName], ['Medium', work.medium], ['Dimensions', work.size], ['Year', work.year]].filter(r => r[1]).map(r => ({ k: r[0], v: r[1] }));
  const related = works.filter(w => w.id !== work.id && w.artist === work.artist).slice(0, 4);
  const more = related.length ? related : works.filter(w => w.id !== work.id).slice(0, 4);
  return {
    isHome: s.page === 'home', isArtist: s.page === 'artist', isWork: s.page === 'work',
    goHome: go('home'), goArtist: go('artist', 'jay-chung'), goWork: go('work', 'diary-of-times'),
    artists, works, featured: works.slice(0, 6), hero: D.hero, heroWork: works[0] || {},
    artist, artistWorks, hasArtistWorks: artistWorks.length > 0,
    hasBio: !!(artist.bio && artist.bio.length), bio: (artist.bio || []).map(t => ({ t })),
    education: (artist.education || []).map(r => ({ y: r[0], t: r[1] })),
    exhibitions: (artist.exhibitions || []).map(r => ({ y: r[0], t: r[1] })),
    hasCv: !!artist.exhibitions,
    work: works[wi] || {}, meta, more, workIndex: pad(wi), workTotal: String(n).padStart(2, '0'),
    prevWork: go('work', (D.works[(wi - 1 + n) % n] || {}).id), nextWork: go('work', (D.works[(wi + 1) % n] || {}).id),
    openWorkArtist: go('artist', work.artist)
  };
};
