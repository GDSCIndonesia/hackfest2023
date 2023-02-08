import Qna from "./Qna";

export default function Faq() {
  const faqData = [
    {
      question: "How much does the enrollment cost?",
      answer: "GDSC Hackfest Indonesia 2023 is completely FREE to join. There are no monetary fees whatsoever required to participate. Hence, please be wary of any fee-related scams claiming to be us."
    },
    {
      question: "Is there anything that I should prepare to join the competition?",
      answer: "Your team has to prepare an idea and a solution to answer the problem statement that is related to the United Nations 17 Sustainable Development Goals. This idea and solution will be competed against other teams' ideas and solutions."
    },
    {
      question: "Can I form a team from different faculties and/or universities?",
      answer: "Yes, you can. Team members are allowed to come from different faculties or universities."
    },
    {
      question: "Who can participate in this competition?",
      answer: "GDSC Hackfest Indonesia is targeted to GDSC Leads, Core Team, and Members, but any college students from Indonesia are welcome to join as long as minimum 1 of the team members is a part of GDSC Indonesia."
    },
    {
      question: "If I am currently staying overseas, can I still be able to participate?",
      answer: `There are several requirements regarding this question. For your information, this event will be held hybrid. The final round will be held offline for only 1 representative of each team, while the other rounds will be held online.

      If you participate as a team, you can send your team member who stays in Indonesia as a representative for the final round. Meanwhile, if you participate alone (without a team), please reach us via email for further information.
      `
    },
    {
      question: "Do I need a team?",
      answer: "While you do have the option of working alone, GDSC HackFest Indonesia is a team event, so working with others is encouraged. You can participate as a team with a minimum of 1 GDSC member from the same/different universities/faculties. The maximum number of team members is 4 people."
    },
    {
      question: "Is there any specific technologies required for our solution?",
      answer: "Any solutions are welcomed though implementing Google technology will earn you bonus points!"
    },
    {
      question: "Are there any prerequisites or required skills?",
      answer: `1. Your solution is expected to be production-ready (serves well as a proof-of-concept application).
              2. If your team requires a solution that needs to be deployed, you are expected to have your own domain purchased and ready.
              3. Implementing Google technology will earn bonus points! But you can also use developer tools that Google did not develop.
              4. Experience in coding and programming is a huge plus, teams will also need people with strong presentation skills and brilliant ideas.
      `
    },
    {
      question: "How do I know if I pass the preliminary round?",
      answer: "You will be notified through email that is included in the registration form regarding your/your team competition status."
    },
    {
      question: "Can I submit more than 1 submission?",
      answer: "No, you can't. All individual participants can only be part of one team and one team can only have a maximum of ONE submission."
    },
    {
      question: "Will I still have full intellectual ownership of our solution?",
      answer: "Your team will still have full rights to your or your team's idea and solution. We do not claim any intellectual property rights over your solution."
    },
    {
      question: "How does the judging work?",
      answer: "Talented professionals in tech will evaluate the solution's impact (how the solution fits the problem statement, accounting for 60% of the total criteria) and the solution's technology (how the solution implements certain technologies and addresses technical challenges, accounting for 40% of the total criteria)."
    },
    {
      question: "How will the winners of GDSC HackFest Indonesia 2023 be announced?",
      answer: "The winners will be announced through the awarding session."
    },
    {
      question: "What will I receive from participating in GDSC Hackfest Indonesia?",
      answer: "You will receive guidance from expert mentors, exciting prizes for winners, and feedback for your submitted solutions from industry-seasoned professionals. Your solution will be polished in this competition to be contested later in the Google Solution Challenge 2023."
    },
    {
      question: "How if I have another question that didn't get answered here?",
      answer: "You will receive guidance from expert mentors, exciting prizes for winners and feedback for your submitted solutions from industry-seasoned professionals."
    },
    {
      question: "How will the winners be announced?",
      answer: `Please kindly reach us directly through our email at gdschackfest@gmail.com or hit our contact persons up below.
      Joni Bastian https://t.me/jonibastian via Telegram
      Sendhy https://wa.me/6282150103051 via WhatsApp
      We would be happy to help you.
      `
    }
  ];
  
  return (
    <section className="border-b-2 border-black bg-gooYellow-900 py-16">
      <div className="container mx-auto flex flex-col items-center">
        <div className="text-center h-full">
          <h2 className="font-gooBold text-title mb-8">
            Frequently Asked Questions
          </h2>
          {/* <p className="font-gooReg text-detail mb-8">
            Eu varius cursus dolor tristique et vestibulum purus. Urna eu cursus
            gravida malesuada bibendum massa scelerisque aliquam ut. Nisl risus
            lorem mattis lectus mi interdum.
          </p> */}
        </div>
        <div className="max-w-6xl mx-10 sm:w-full sm:mx-0">
          {faqData.map((faq, index) => (
            <Qna key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
