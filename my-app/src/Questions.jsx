import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const QuestionData = [
  {
    id: 1,
    title: 'Are you a super catal?',
    answer:
      'Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush catel.',
  },
  {
    id: 2,
    title: 'Are you a super dog?',
    answer:
      'Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush dog.',
  },
  {
    id: 3,
    title: 'Are you a super horse?',
    answer:
      'Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush horse.',
  },
  {
    id: 4,
    title: 'Are you a super lion?',
    answer:
      'Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush lion.',
  },
  {
    id: 5,
    title: 'Are you a super catal?',
    answer:
      'Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush className.',
  },
]

function Questions() {
  return (
    <div>
      <section className='p-5'>
        <div className='container'>
          <h2 class='text-center mb-4'>Ask me a Question</h2>
          {QuestionData.map((item) => (
            <Question key={item.id} {...item} />
          ))}
        </div>
      </section>
    </div>
  )
}

const Question = ({ id, title, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false)
  return (
    <>
    

      <div class='container-fluid'>
        <div class='row border-bottom'>
          
          <div class='col btn btn-primay text-start '>
            <h4
              onClick={() => setShowAnswer(!showAnswer)}
              className='fs-6 py-1 text-primary  '
            >
              {title}
            </h4>
          
          </div>
          <div class='col-1 text-end'>
            <button
              className='btn '
              onClick={() => setShowAnswer(!showAnswer)}
            >
              {showAnswer ? (
                <AiOutlineMinus className='text-dark' />
              ) : (
                <AiOutlinePlus className='text-primary' />
              )}
            </button>
          </div>
          {showAnswer && <p className='text-primay'>{answer}</p>}
        </div>
      </div>
    </>
  )
}

export default Questions
