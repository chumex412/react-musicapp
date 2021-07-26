import { nanoid } from 'nanoid';

function chillHop () {
  return [
    {
      name: "Dawn",
      cover: "https://i.scdn.co/image/ab67616d0000b273a5f0ece59a9def78ad477d2b",
      artist: "Toonorth",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=17941",
      color: ["#25354f", "#3c4f6f"],
      id: `id-${nanoid()}`,
      active: true
    },

    {
      name: "Dreamstate",
      cover: "https://i.scdn.co/image/ab67616d0000b273a5f0ece59a9def78ad477d2b",
      artist: "Toonorth",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=17947",
      color: ["#25354f", "#3c4f6f"],
      id: `id-${nanoid()}`,
      active: false
    },

    {
      name: "Man it's late",
      cover: "https://i.scdn.co/image/ab67616d0000b273e61a3d49a9256ceb24892f73",
      artist: "Mommy, sleepy fish",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=19064",
      color: ["#5b8cce", "#779ed9"],
      id: `id-${nanoid()}`,
      active: false
    },

    {
      name: "Higher",
      cover: "https://i.scdn.co/image/ab67616d0000b27382a863c04b0f7d55c8afed01",
      artist: "Misha, Jussi Halme",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=15088",
      color: ["#ff9d60", "#d54948"],
      id: `id-${nanoid()}`,
      active: false
    },

    {
      name: "Evening stroll",
      cover: "https://i.scdn.co/image/ab67616d0000b273250f6203bf51f361c7e8fac9",
      artist: "xander, Blue Wednesday",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=16178",
      color: ["#eb7553", "#e4b04d"],
      id: `id-${nanoid()}`,
      active: false
    },

    {
      name: "Despair",
      cover: "https://i.scdn.co/image/ab67616d0000b273250f6203bf51f361c7e8fac9",
      artist: "Evil needle",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=16213",
      color: ["#eb7553", "#e4b04d"],
      id: `id-${nanoid()}`,
      active: false
    },

    {
      name: "Roses and flames",
      cover: "https://i.scdn.co/image/ab67616d0000b27313e60e805a525f41d1b2bc14",
      artist: "C Y G N",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=14985",
      color: ["#402d5a", "#a253b7"],
      id: `id-${nanoid()}`,
      active: false
    }
  ]
}

export default chillHop;