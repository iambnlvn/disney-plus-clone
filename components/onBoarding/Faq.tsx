import Question from "./Question";

const Faq = () => {
  type faqItem = {
    question: string;
    answer: string;
    bullets?: string[];
  };

  const faqItems: faqItem[] = [{
    question: "What is Disney+?",
    answer:
      "Disney+ is the dedicated streaming home of your favourite stories from Disney, Pixar, Marvel,Star Wars, National Geographic; as well as a huge range if general entertainment with Star - all in one place. With thousands of movies, TV series, and exclusive Originals to choose from, there's something for everyone on Disney+. Subscribers can also enjoy a number of benefits included in their subscription, such as:",
    bullets: [
      "Unlimited downloads on up to 10 devices and up to 7 different profiles",
      "A robust parental controls system including dedicated profiles for children.",
      "4K UHD streaming with Dolby Vision and Dolby Atmos support on compatible devices for no extra cost",
      "Up to 4 screens can stream simultaneously",
    ],
  }, {
    question: "What can I watch on Disney+?",
    answer:
      "With thousands of films and series from the greatest storytellers around the globe and more added each month, you will always find something to watch on Disney+",
    bullets: [
      "The biggest animated blockbusters from Disney, like The Lion King and Encanto",
      "Heart-warming storytelling for all ages from masterminds at Pixar such as Luca and Turning Red",
      "Experience the ever-growing story of Marvel Cineùatic Universe like never before with must-see exclusive Original series from Marvel Studios She-Hulk and Moon Knight",
      "Relieve the epic Saga in a galaxy far away with Star Wars hit series, like The Mandalorian and Andor",
      "Open your eyes to the beauty of out planet with fearless National Geographic explorers and a number of insightful documentaries, like Gordon Ramsay: Uncharted and welcome to Earth",
      "With Star you will find the most talked about bingeable series like the global phenomenon The Walking Dead and Grey's Anatomy",
    ],
  }, {
    question: "How much Disney+ cost?",
    answer:
      "Disney+ subscription costs 399.99 DZD a month. Alternatively, save over 15% with the annual subscription at 3,998.99 DZD a year and get 12 months for the price of 10.",
  }, {
    question: "What devices are supported?",
    answer:
      "Disney+ supports mobile devices, web browsers, game consoles, set-top boxes, and smart TVs.",
  }, {
    question: "Is there any commitment when signing up for Disney+?",
    answer:
      "There are no commitments and you can cancel at any time, effective at tge end of your current payment period.",
  }];

  return (
    <section className="w-full flex flex-col items-center py-10 md:px-24 gap-4">
      <h1 className="text-center text-neutral-300 text-2xl font-bold md:text-4xl md:tracking-wide pt-4">
        Frequently Asked Questions
      </h1>
      {faqItems.map((item, idx) => (
        <Question
          key={idx}
          question={item.question}
          answer={item.answer}
          bullets={item.bullets}
        />
      ))}
    </section>
  );
};

export default Faq;
