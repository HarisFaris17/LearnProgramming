question = ["My name ?\n(a) Haris\n(b) Nuke\n(c) Aila",
            "My favorite ?\n(a) Ice cream\n(b) Padang\n(c) Opor",
            "Language ?\n(a) Python\n(b) C++\n(c) Java"
]

answer = ['a','b','a']

class QuestionAndAnswer:
    def __init__(self,question,right_answer) -> None:
        self.question = question
        self.right_answer = right_answer

    def ask(self):
        answer = []
        for i in range(len(self.question)):
            print(self.question[i])
            jawaban = input("Jawaban anda : ")
            if(jawaban==self.right_answer[i]): answer.append(jawaban)
        print("Jawaban anda yang benar : ",answer)

question_answer = QuestionAndAnswer(question,answer)