const pathMappings = {
  "/S1/單元二：敘事寫人/岳飛之少年時代": "/岳飛之少年時代",
  "/S1/單元三：借事抒情/3.5背影": "/背影",
  "/S1/單元四：詩歌欣賞/4.5燕詩": "/燕詩",
  "/S1/單元四：詩歌欣賞/4.12客至": "/客至",
  "/S1/單元四：詩歌欣賞/4.26涉江采芙蓉": "/涉江采芙蓉",
  "/S1/單元四：詩歌欣賞/4.30從軍行七首（其二）": "/從軍行七首（其二）",
  "/S1/單元四：詩歌欣賞/4.34送友人": "/送友人",
  "/S1/單元六：景物描寫（一）/6.5風雪中的北平": "/風雪中的北平",
  "/S1/單元六：景物描寫（一）/海濱仲夏夜": "/海濱仲夏夜",
  "/S1/單元六：景物描寫（一）/6.29海上的日出": "/海上的日出",
  "/S1/單元七：說明的方法和順序/生物之間的微妙關係": "/生物之間的微妙關係",
  "/S1/單元八：借事說理/曾子殺豬": "/曾子殺豬",
  "/S1/單元八：借事說理/賣油翁": "/賣油翁",
};

const redirect = [
  "@docusaurus/plugin-client-redirects",
  {
    redirects: [
      {
        to: "/docs/newDoc",
        from: "/docs/oldDoc",
      },
    ],
  },
];

export default redirect;
