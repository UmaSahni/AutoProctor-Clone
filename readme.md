# https://formbuilder-neon.vercel.app/

##  The application is built using the MERN stack.

### Form Builder

[![Form Builder](https://i.postimg.cc/L5nMW7Fv/image.png)](https://postimg.cc/p5b7hsTn)

#### Functionalities for Comprehension

1. **Dynamically Add Questions:**
   - Click the `+` button to dynamically add questions.

2. **Delete Existing Questions:**
   - Easily delete existing questions as needed.

3. **Rearrange Order of Options:**
   - Drag and drop options to rearrange their order.

[![Form Builder Preview](https://i.postimg.cc/nVjF0jVx/image.png)](https://postimg.cc/0rv1NNJX)

### Coze

[![Coze](https://i.postimg.cc/jdMM25NW/image.png)](https://postimg.cc/GHsFSbXr)

#### Functionalities for Coze

1. **Underline Text:**
   - Select text and click on the `underline icon` to apply formatting.

2. **Automatic Addition to Option Box:**
   - The underlined word will be automatically added to the option box.

3. **Rearrange Order of Options:**
   - Drag and drop options to rearrange their order.

### Preview

**Loading Indicator:**

![Loading Indicator](https://github.com/UmaSahni/AutoProctor-Clone/assets/112793743/1baede81-3074-4f5e-aab0-79e409216c72)

**Form Preview:**

![Form Preview](https://github.com/UmaSahni/AutoProctor-Clone/assets/112793743/81ad00fa-cc76-4807-a344-e57b76e014e3)

## Database for MCQ Questions
```json
{
  "_id": {
    "$oid": "65798d2f4a21e349740420b0"
  },
  "userId": "385e8fa8-80d6-4d1f-a3da-c662274cfabb",
  "questionType": "MCQ",
  "question": "What is Lorem Ipsum?",
  "passage": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  "options": [
    {
      "text": "It is a long established fact",
      "isCorrect": false,
      "_id": {
        "$oid": "65798d2f4a21e349740420b1"
      }
    },
    {
      "text": "distracted by the readable content",
      "isCorrect": true,
      "_id": {
        "$oid": "65798d2f4a21e349740420b2"
      }
    },
    {
      "text": "Many desktop publishing packages ",
      "isCorrect": false,
      "_id": {
        "$oid": "65798d2f4a21e349740420b3"
      }
    },
    {
      "text": "humour and the like",
      "isCorrect": false,
      "_id": {
        "$oid": "65798d2f4a21e349740420b4"
      }
    }
  ]
}

```

## Database for Cloze questions
```json
{
  "_id": {
    "$oid": "65798d604a21e349740420b6"
  },
  "userId": "385e8fa8-80d6-4d1f-a3da-c662274cfabb",
  "questionType": "Cloze",
  "sentence": "Where does it <u>come</u> from?",
  "blanks": [
    {
      "index": -1,
      "text": [],
      "options": [
        {
          "text": "Richard McClintock",
          "isCorrect": false,
          "_id": {
            "$oid": "65798d604a21e349740420b8"
          }
        },
        {
          "text": "come",
          "isCorrect": false,
          "_id": {
            "$oid": "65798d604a21e349740420b9"
          }
        },
        {
          "text": "consectetur",
          "isCorrect": false,
          "_id": {
            "$oid": "65798d604a21e349740420ba"
          }
        },
        {
          "text": "Cicero",
          "isCorrect": false,
          "_id": {
            "$oid": "65798d604a21e349740420bb"
          }
        }
      ],
      "_id": {
        "$oid": "65798d604a21e349740420b7"
      }
    }
  ],
  "__v": 0
}
```



