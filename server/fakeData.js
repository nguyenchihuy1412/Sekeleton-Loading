const videos = [
  {
    id: 1,
    title: "Momo Belia Deviluke",
    views: "33.3M",
    date: "1 hour ago",
    duration: "3:00",
    img: "https://i.pinimg.com/originals/b7/7f/fa/b77ffa46840d7ef2545063ac43e60631.jpg",
    channel: {
      name: "To love ru",
      avatar:
        "https://i.pinimg.com/originals/b7/7f/fa/b77ffa46840d7ef2545063ac43e60631.jpg",
    },
  },
  {
    id: 2,
    title: "Lala Satalin Deviluke",
    views: "22.2M",
    date: "2 hours ago",
    img: "http://pm1.narvii.com/6376/0ffa831834811b200064f1e43383cf4bc0940936_00.jpg",
    duration: "11:00",
    channel: {
      name: "Lala Satalin Deviluke",
      avatar:
        "http://pm1.narvii.com/6376/0ffa831834811b200064f1e43383cf4bc0940936_00.jpg",
    },
  },
  {
    id: 3,
    title: "Nana Astar Deviluke",
    views: "11.1M",
    date: "1 day ago",
    img: "https://images8.alphacoders.com/675/thumb-1920-675257.jpg",
    duration: "8:00:00",
    channel: {
      name: "Nana Astar Deviluke",
      avatar: "https://images8.alphacoders.com/675/thumb-1920-675257.jpg",
    },
  },
  {
    id: 4,
    title: "Yuuki Mikan",
    views: "15.5M",
    date: "1 week ago",
    img: "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.18169-9/12096525_884965098248194_2397595744290035298_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=s4nu6DXx3ckAX_TZgTS&_nc_ht=scontent.fhan3-2.fna&oh=00_AT_aujhAOlAULKwCo_Em2yuc-dgvnXnbA2O-njKFx98ABw&oe=628A07BA",
    duration: "14:00",
    channel: {
      name: "Yuuki Mikan",
      avatar:
        "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.18169-9/12096525_884965098248194_2397595744290035298_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=s4nu6DXx3ckAX_TZgTS&_nc_ht=scontent.fhan3-2.fna&oh=00_AT_aujhAOlAULKwCo_Em2yuc-dgvnXnbA2O-njKFx98ABw&oe=628A07BA",
    },
  },
  {
    id: 5,
    title: "Haruna Sairenji",
    views: "13M",
    date: "1 day ago",
    img: "https://i.pinimg.com/originals/41/55/95/415595ac9d0de9ede1cfc516eb8e0273.jpg",
    duration: "5:17",
    channel: {
      name: "Codeinvestor",
      avatar:
        "https://i.pinimg.com/originals/41/55/95/415595ac9d0de9ede1cfc516eb8e0273.jpg",
    },
  },
  {
    id: 6,
    title: "Momo Belia Deviluke",
    views: "33.3M",
    date: "1 hour ago",
    duration: "3:00",
    img: "https://i.pinimg.com/originals/b7/7f/fa/b77ffa46840d7ef2545063ac43e60631.jpg",
    channel: {
      name: "To love ru",
      avatar:
        "https://i.pinimg.com/originals/b7/7f/fa/b77ffa46840d7ef2545063ac43e60631.jpg",
    },
  },
  {
    id: 7,
    title: "Lala Satalin Deviluke",
    views: "22.2M",
    date: "2 hours ago",
    img: "http://pm1.narvii.com/6376/0ffa831834811b200064f1e43383cf4bc0940936_00.jpg",
    duration: "11:00",
    channel: {
      name: "Lala Satalin Deviluke",
      avatar:
        "http://pm1.narvii.com/6376/0ffa831834811b200064f1e43383cf4bc0940936_00.jpg",
    },
  },
  {
    id: 8,
    title: "Nana Astar Deviluke",
    views: "11.1M",
    date: "1 day ago",
    img: "https://images8.alphacoders.com/675/thumb-1920-675257.jpg",
    duration: "8:00:00",
    channel: {
      name: "Nana Astar Deviluke",
      avatar: "https://images8.alphacoders.com/675/thumb-1920-675257.jpg",
    },
  },
  {
    id: 9,
    title: "Yuuki Mikan",
    views: "15.5M",
    date: "1 week ago",
    img: "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.18169-9/12096525_884965098248194_2397595744290035298_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=s4nu6DXx3ckAX_TZgTS&_nc_ht=scontent.fhan3-2.fna&oh=00_AT_aujhAOlAULKwCo_Em2yuc-dgvnXnbA2O-njKFx98ABw&oe=628A07BA",
    duration: "14:00",
    channel: {
      name: "Yuuki Mikan",
      avatar:
        "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.18169-9/12096525_884965098248194_2397595744290035298_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=s4nu6DXx3ckAX_TZgTS&_nc_ht=scontent.fhan3-2.fna&oh=00_AT_aujhAOlAULKwCo_Em2yuc-dgvnXnbA2O-njKFx98ABw&oe=628A07BA",
    },
  },
  {
    id: 10,
    title: "Haruna Sairenji",
    views: "13M",
    date: "1 day ago",
    img: "https://i.pinimg.com/originals/41/55/95/415595ac9d0de9ede1cfc516eb8e0273.jpg",
    duration: "5:17",
    channel: {
      name: "Codeinvestor",
      avatar:
        "https://i.pinimg.com/originals/41/55/95/415595ac9d0de9ede1cfc516eb8e0273.jpg",
    },
  },
  {
    id: 11,
    title: "Momo Belia Deviluke",
    views: "33.3M",
    date: "1 hour ago",
    duration: "3:00",
    img: "https://i.pinimg.com/originals/b7/7f/fa/b77ffa46840d7ef2545063ac43e60631.jpg",
    channel: {
      name: "To love ru",
      avatar:
        "https://i.pinimg.com/originals/b7/7f/fa/b77ffa46840d7ef2545063ac43e60631.jpg",
    },
  },
  {
    id: 12,
    title: "Lala Satalin Deviluke",
    views: "22.2M",
    date: "2 hours ago",
    img: "http://pm1.narvii.com/6376/0ffa831834811b200064f1e43383cf4bc0940936_00.jpg",
    duration: "11:00",
    channel: {
      name: "Lala Satalin Deviluke",
      avatar:
        "http://pm1.narvii.com/6376/0ffa831834811b200064f1e43383cf4bc0940936_00.jpg",
    },
  },
];

module.exports = { videos };
