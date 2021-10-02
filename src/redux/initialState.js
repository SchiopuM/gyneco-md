export const initialState = {
  virginitate: [
    {
      question:
        "Trebuie oare să fie prezente sângerările la primul act sexual?",
      answers: [
        {
          answerText: "Da, numaidecât",
          isTrue: false,
          explication:
            "Răspunsul corect este C, pentru că numai 60% din femei prezintă sângerări în timpul primului act sexual.",
        },
        {
          answerText: "Dacă nu sunt, înseamnă că ai avut relații sexuale",
          isTrue: false,
          explication:
            "Răspunsul corect este C, pentru că numai 60% din femei prezintă sângerări în timpul primului act sexual.",
        },
        {
          answerText:
            "Nu neapărat, 40% din fete nu prezintă sângerări la primul act sexual",
          isTrue: true,
        },
        {
          answerText: "Sângerări la primul act sexual nu există!",
          isTrue: false,
          explication:
            "Răspunsul corect este C, pentru că numai 60% din femei prezintă sângerări în timpul primului act sexual.",
        },
      ],
    },
    {
      question: "Începerea vieții sexuale presupune...?",
      answers: [
        {
          answerText: "Sex vaginal cu penetrare",
          isTrue: false,
          explication:
            "Răspunsul corect este D, pentru că începerea vieții sexuale presupune orice timp de act sexual",
        },
        {
          answerText: "Sex anal",
          isTrue: false,
          explication:
            "Răspunsul corect este D, pentru că începerea vieții sexuale presupune orice timp de act sexual",
        },
        {
          answerText: "Sex oral",
          isTrue: false,
          explication:
            "Răspunsul corect este D, pentru că începerea vieții sexuale presupune orice timp de act sexual",
        },
        {
          answerText: "Toate cele enumerate mai sus",
          isTrue: true,
        },
      ],
    },
    {
      question: "Poți rămâne gravidă la primul act sexual?",
      answers: [
        {
          answerText: "La primul act nu poți rămâne gravidă",
          isTrue: false,
          explication:
            "Răspunsul corect este B, pentru că odadă ce are loc penetrarea penisului în vagin există risc de sarcină",
        },
        {
          answerText: "Da, poți, exact ca la toate celelalte",
          isTrue: true,
        },
        {
          answerText: "Dacă faci duș după actul sexual, nu vei rămâne gravidă",
          isTrue: false,
          explication:
            "Răspunsul corect este B, pentru că odadă ce are loc penetrarea penisului în vagin există risc de sarcină",
        },
        {
          answerText:
            "Dacă partenerul ejaculează în afara vaginului, nu vei rămâne gravidă ",
          isTrue: false,
          explication:
            "Răspunsul corect este B, pentru că odadă ce are loc penetrarea penisului în vagin există risc de sarcină",
        },
      ],
    },
  ],
  cicluMenstrual: [
    {
      question: "Ce înseamnă ciclul menstrual?",
      answers: [
        {
          answerText: "Perioada de sângerare sau menstruație",
          isTrue: false,
          explication:
            "Răspunsul corect este B, pentru că ciclul menstrual este perioada de 28-30 zile care include în sine și menstruația",
        },
        {
          answerText:
            "Perioada din prima zi de sângerare până la apariția următoarei sângerări",
          isTrue: true,
        },
        {
          answerText: "Perioada în care nu sunt sângerări",
          isTrue: false,
          explication:
            "Răspunsul corect este B, pentru că ciclul menstrual este perioada de 28-30 zile care include în sine și menstruația",
        },
        {
          answerText: "Perioada în care poți rămâne însărcinată",
          isTrue: false,
          explication:
            "Răspunsul corect este B, pentru că ciclul menstrual este perioada de 28-30 zile care include în sine și menstruația",
        },
      ],
    },
    {
      question: "Ce înseamnă menstruație?",
      answers: [
        {
          answerText: "Perioada de sângerare sau menstruație",
          isTrue: true,
        },
        {
          answerText:
            "Perioada din prima zi de sângerare până la apariția următoarei sângerări",
          isTrue: false,
          explication:
            "Răspunsul corect este A, pentru că menstruația în sine înseamnă sângerare, fiind perioada de 4-7 zile în care aceasta are loc",
        },
        {
          answerText: "Perioada în care nu sunt sângerări",
          isTrue: false,
          explication:
            "Răspunsul corect este A, pentru că menstruația în sine înseamnă sângerare, fiind perioada de 4-7 zile în care aceasta are loc",
        },
        {
          answerText: "Perioada în care poți rămâne însărcinată",
          isTrue: false,
          explication:
            "Răspunsul corect este A, pentru că menstruația în sine înseamnă sângerare, fiind perioada de 4-7 zile în care aceasta are loc",
        },
      ],
    },
    {
      question: "Cât durează un ciclu menstrual?",
      answers: [
        {
          answerText: "21-38 zile la femei de vârstă reproductivă",
          isTrue: false,
          explication:
            "Răspunsul corect este D, pentru că durata ciclului menstrual depinde de mai mulți factori și nu este o perioadă fixă",
        },
        {
          answerText: "21-45 zile la adolescente",
          isTrue: false,
          explication:
            "Răspunsul corect este D, pentru că durata ciclului menstrual depinde de mai mulți factori și nu este o perioadă fixă",
        },
        {
          answerText:
            "Durata ciclului nu e neapărat să fie fix 1 lună sau să înceapă la aceiași dată",
          isTrue: false,
          explication:
            "Răspunsul corect este D, pentru că durata ciclului menstrual depinde de mai mulți factori și nu este o perioadă fixă",
        },
        {
          answerText: "Toate cele enumerate mai sus CORECT",
          isTrue: true,
        },
      ],
    },
  ],
  ist: [
    {
      question: "De ce sunt provocate infecțiile sexual-transmisibile?",
      answers: [
        {
          answerText: "Bacterii",
          isTrue: false,
          explication:
            "Răspunsul corect este D, pentru că oricare din cele enumerate poate provoca infecții sexual-transmisibile",
        },
        {
          answerText: "Virusuri",
          isTrue: false,
          explication:
            "Răspunsul corect este D, pentru că oricare din cele enumerate poate provoca infecții sexual-transmisibile",
        },
        {
          answerText: "Paraziți",
          isTrue: false,
          explication:
            "Răspunsul corect este D, pentru că oricare din cele enumerate poate provoca infecții sexual-transmisibile",
        },
        {
          answerText: "Toate cele enumerate mai sus",
          isTrue: true,
        },
      ],
    },
    {
      question: "Infecțiile sexual-transmisibile sunt:",
      answers: [
        {
          answerText: "Toate sunt incurabile",
          isTrue: false,
          explication:
            "Răspunsul corect este D, pentru că nu toate infecțiile sexual-transmisibile sunt curabile, chiar dacă sunt depistate la timp",
        },
        {
          answerText: "Toate sunt curabile",
          isTrue: false,
          explication:
            "Răspunsul corect este D, pentru că nu toate infecțiile sexual-transmisibile sunt curabile, chiar dacă sunt depistate la timp",
        },
        {
          answerText: "Curabile, dacă la timp sunt diagnosticate",
          isTrue: false,
          explication:
            "Răspunsul corect este D, pentru că nu toate infecțiile sexual-transmisibile sunt curabile, chiar dacă sunt depistate la timp",
        },
        {
          answerText:
            "Există IST incurabile, indiferent când au fost depistate",
          isTrue: true,
        },
      ],
    },
    {
      question: "Infecțiile sexual-transmisibile se pot transmite prin:",
      answers: [
        {
          answerText: "Act sexual vaginal, oral, anal",
          isTrue: false,
          explication:
            "Răspunsul corect este D, pentru că diferite infecții se transmit prin diferite căi",
        },
        {
          answerText: "Prin sânge",
          isTrue: false,
          explication:
            "Răspunsul corect este D, pentru că diferite infecții se transmit prin diferite căi",
        },
        {
          answerText: "De la mamă la făt în sarcină, naștere sau alăptare",
          isTrue: false,
          explication:
            "Răspunsul corect este D, pentru că diferite infecții se transmit prin diferite căi",
        },
        {
          answerText: "Toate cele enumerate mai sus",
          isTrue: true,
        },
      ],
    },
  ],
};
