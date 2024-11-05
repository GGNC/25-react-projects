import TabPage from "./pages/TabPage";

function App() {
  const data = [
    {
      id : 1,
      title : "Anakin SkyWalker",
      content :
        <div className="flex flex-row items-start gap-5">
          <img className="w-2/5 min-w-48" src="https://preview.redd.it/i-am-honestly-not-shy-or-ashamed-to-say-that-hayden-v0-u832rx8mvfy81.jpg?width=1019&format=pjpg&auto=webp&s=22fdf7c8a2221ab511fac7cfd31731ea3eb0edcd"></img>
          <p className="min-w-32 text-lg font-medium">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Discovered as a slave on Tatooine by Qui-Gon Jinn and Obi-Wan Kenobi, Anakin Skywalker had the potential to become one of the most powerful Jedi ever. Some even believed he was the prophesied Chosen One who would bring balance to the Force.
          </p>
        </div>
  },
  {
      id : 2,
      title : "Obi-Wan Kenobi",
      content :
      <div className="flex flex-row items-start gap-5">
        <img className="w-2/5 min-w-48" src="https://www.theodysseyonline.com/media-library/image.jpg?id=12859028&width=800&quality=80"></img>
        <p className="min-w-32 text-lg font-medium">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A legendary Jedi Master, Obi-Wan Kenobi was a noble man and gifted in the ways of the Force. He trained Anakin Skywalker, served as a general in the Republic Army during the Clone Wars, and guided Luke Skywalker as a mentor.
        </p>
    </div>
  },
  {
      id : 3,
      title : "Count Dooku",
      content :
      <div className="flex flex-row items-start gap-5">
        <img className="w-2/5 min-w-48" src="https://i.pinimg.com/736x/0c/fd/95/0cfd953f19af396718c6a9f6e4a144ac.jpg"></img>
        <p className="min-w-32 text-lg font-medium">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Count Dooku was a menacing Sith Lord and central figure in the Clone Wars. Once a Jedi -- trained by Yoda -- he became disillusioned with the Jedi Order.
        </p>
      </div>
  },
  {
      id : 4,
      title : "Mace Windu",
      content :
      <div className="flex flex-col gap-5">
        <img className=" min-w-32" src="https://static1.srcdn.com/wordpress/wp-content/uploads/2024/02/windu-1.jpg"></img>
        <p className="min-w-32 text-lg font-medium">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A grim Jedi Master with an amethyst-bladed lightsaber, Mace Windu was the champion of the Jedi Order, with little tolerance for the failings of the Senate, the arguments of politicians, or the opinions of rebellious Jedi.
        </p>
      </div>
  },
]
  return (
    <div>
      <TabPage tabData={data}/>
    </div>
  )
}

export default App;