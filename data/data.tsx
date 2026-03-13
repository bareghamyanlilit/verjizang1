export const program = [
  {
    time: "10:00",
    title: "Հովհաննես Թումանյանի անվան \n Հիմնական թիվ 7",
    address: "",
    img:'/img3.jpg'
  },
  {
    time: "12:00",
    title: "Սուրբ Հռիփսիմե եկեղեցի",
    address: "Սուրբ Հռիփսիմե եկեղեցի",
    img:'/img4.jpg'
  },
  {
    time: "17:30",
    title: "Էլինար Ռեստորանային Համալիր",
    address: "Էլինար Ռեստորանային Համալիր",
    img:'/img5.jpg'
  },
];

export const anim: any = {
  initial: { opacity: 0, y: 10 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeIn",
    },
  },
  viewport: { once: true },
};
