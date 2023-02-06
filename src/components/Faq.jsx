import Qna from "./Qna";

export default function Faq() {
  const faqData = [
    {
      question: "Is there anything that I should prepare to join the competition?",
      answer: "Your team has to prepare an idea and a solution to answer the problem statement that will be competed against other teams' ideas and solutions."
    },
    {
      question: "Can I form a team from a different Faculty and/or University?",
      answer: "Team members are allowed to come from different universities or faculties."
    },
    {
      question: "What are the expected qualifications in the Preliminary stage?",
      answer: "Further inquiries that haven't been addressed in our FAQ or landing page can be made through our email at gdschackfest@gmail.com"
    },
    {
      question: "How do I know if I pass the preliminary round?",
      answer: "Participants will be notified through email regarding their competition status"
    },
    {
      question: "If I am currently staying overseas, can I still be able to participate?",
      answer: "Yes, you can still participate as our event will be held fully online!"
    },
    {
      question: "Who can participate in this event?",
      answer: "Google Developer Student Club Leads, Core Team, and/or members from all over Indonesia are welcomed to join!"
    },
    {
      question: "Is there any specific technologies required for our solution?",
      answer: "Any solutions are welcomed though implementing Google technology will earn you bonus points!"
    },
    {
      question: "Does the competition have any enrollment/participatory fees?",
      answer: "This competition is 100% free to join, there are no monetary fees whatsoever required to participate hence please be weary of any fee-related scams claiming to be us!"
    },
    {
      question: "Will our team still have full intellectual ownership of our solution?",
      answer: "Your team will still have full rights to your idea and solution, we do not claim any intellectual property rights over your solution!"
    },
    {
      question: "Can I participate as a team?",
      answer: "You can participate as a team with as many as 4 team members."
    },
    {
      question: "Can I submit more than one submission?",
      answer: "All individual participants can only be part of one team and one team can only have a maximum of ONE submission."
    },
    {
      question: "Do I have to have a domain ready for deployment?",
      answer: "If your team requires a solution that needs to be deployed, yes, you are expected to have your own domain purchased and ready."
    },
    {
      question: "What are the requirements for the solution?",
      answer: "Your solution is expected to be production-ready (serves well as a proof-of-concept application)"
    },
    {
      question: "What are the judging criterias?",
      answer: "The judging criteria will regard the solution's impact (how the solution fits the problem statement, accounting for 60% of the total criteria), and the solution's technology (how the solution implements certain technologies and addresses technical challenges, accounting for 40% of the total criteria)"
    },
    {
      question: "What will I receive from participating in HackFest Indonesia?",
      answer: "You will receive guidance from expert mentors, exciting prizes for winners and feedback for your submitted solutions from industry-seasoned professionals."
    },
    {
      question: "How will the winners be announced?",
      answer: "Winners will be announced through email and through our awarding event which will be announced later on."
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
