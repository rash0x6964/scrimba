const posts = [
  {
    urlImg: "images/article-image-hero.png",
    date: "july 23,2022",
    title: "My new journey as a bootcamp student.",
    paragraph:
      "After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.",
  },
  {
    urlImg: "images/blog-image-01.png",
    date: "july 23,2022",
    title: "Blog one",
    paragraph:
      "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
  },
	{
    urlImg: "images/blog-image-02.png",
    date: "july 23,2022",
    title: "Blog two",
    paragraph:
      "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
  },
	{
    urlImg: "images/blog-image-03.png",
    date: "july 23,2022",
    title: "Blog three",
    paragraph:
      "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
  },
	{
    urlImg: "images/blog-image-04.png",
    date: "july 23,2022",
    title: "Blog X",
    paragraph:
      "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
  },
  {
    urlImg: "images/blog-image-05.png",
    date: "july 23,2022",
    title: "Blog X",
    paragraph:
      "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
  },
  {
    urlImg: "images/blog-image-06.png",
    date: "july 23,2022",
    title: "Blog X",
    paragraph:
      "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
  },
]
let heroPost = document.getElementById("heroPost")
let postHolder = document.getElementById("otherPost")

heroPost.innerHTML += `
    <img src="${posts[0].urlImg}" alt="">
    <div>
      <span class="date">${posts[0].date}</span>
      <h3>${posts[0].title}</h3>
      <p class="discription">${posts[0].paragraph}</p>
    </div>
`

posts.shift();

let cards = posts.map((el, index) => `
    <div class="card">
      <img src="${el.urlImg}" alt="">
      <span class="date">${el.date}</span>
      <h3>${el.title}</h3>
      <p class="discription">${el.paragraph}</p>
    </div>
  `
)

postHolder.innerHTML += cards.join("")
