import React, { useState, useEffect } from 'react';

const categories = [
  { 
    name: "국어", 
    image: "https://cdn.pixabay.com/photo/2020/04/19/03/12/sejong-5061668_1280.jpg",
    units: [
      { 
        name: "관용 표현",
        questions: [
          { question: "친구가 너무 많은 일을 하느라 매우 피곤해하고 있어요. 이런 친구의 상태를 표현하는 관용 표현은 무엇일까요?",
            options: ["파김치가 되다", "손에 땀을 쥐다", "눈이 높다", "귀가 얇다"],
            answer: "파김치가 되다"
          },
          { question: "어려운 문제를 풀려고 열심히 생각하고 있어요. 이럴 때 사용하는 관용 표현은 무엇일까요?",
            options: ["머리를 맞대다", "귀를 기울이다", "눈에 불을 켜다", "입에 거품을 물다"],
            answer: "눈에 불을 켜다"
          },
          { question: "친구의 이야기가 너무 재미있어서 집중해서 듣고 있어요. 이런 상황을 표현하는 관용 표현은 무엇일까요?",
            options: ["귀를 쫑긋 세우다", "입이 무겁다", "코가 높다", "손을 놓다"],
            answer: "귀를 쫑긋 세우다"
          },
          { question: "다른 사람의 말을 쉽게 믿는 친구를 표현하는 관용 표현은 무엇일까요?",
            options: ["귀가 얇다", "입이 무겁다", "눈이 높다", "발이 넓다"],
            answer: "귀가 얇다"
          },
          { question: "친구와 함께 너무 재미있게 놀다가 배가 아플 정도로 웃었어요. 이런 상황을 표현하는 관용 표현은 무엇일까요?",
            options: ["배꼽이 빠지다", "귀가 얇다", "눈이 높다", "입을 닫다"],
            answer: "배꼽이 빠지다"
          },
          { question: "마라톤 대회에 출전한 선수가 힘들어서 지치고 포기하고 싶지만 끝까지 완주하기 위해 노력하고 있어요. 이런 선수를 표현하는 관용 표현은 무엇일까요?",
            options: ["이를 악물다", "눈을 감다", "코웃음을 치다", "손을 놓다"],
            answer: "이를 악물다"
          },
          { question: "너무 배가 고파서 음식을 보니 군침이 돌아요. 이럴 때 사용하는 관용 표현은 무엇일까요?",
            options: ["입에 거품을 물다", "입맛을 다시다", "귀에 못이 박히다", "눈이 뒤집히다"],
            answer: "입맛을 다시다"
          },
          { question: "한 친구가 축구 실력을 자랑하며 상대팀을 이길 거라 큰소리쳤지만, 결국 큰 점수 차이로 패배했어요. 이때 친구의 마음 상태를 표현하는 관용 표현은 무엇일까요?",
            options: ["어깨가 무겁다", "얼굴이 뜨겁다", "코가 납작해지다", "손을 벌리다"],
            answer: "코가 납작해지다"
          },
          { question: "중요한 발표를 앞두고 긴장해서 손이 떨려요. 이럴 때 사용하는 관용 표현은 무엇일까요?",
            options: ["손에 땀을 쥐다", "발을 동동 구르다", "눈에 흙이 들어가다", "귀가 간지럽다"],
            answer: "손에 땀을 쥐다"
          },
          { question: "친구의 멋진 공연을 보고 놀랐어요. 이럴 때 사용하는 관용 표현은 무엇일까요?",
            options: ["눈이 휘둥그레지다", "코를 납작하게 하다", "입이 무겁다", "귀에 거슬리다"],
            answer: "눈이 휘둥그레지다"
          },
          { question: "친구가 잘못을 인정하지 않고 변명만 해요. 이런 친구를 표현하는 관용 표현은 무엇일까요?",
            options: ["발뺌을 하다", "귀를 기울이다", "손을 잡다", "눈에 띄다"],
            answer: "발뺌을 하다"
          },
          { question: "좋은 소식을 듣고 너무 기뻐서 얼굴에 미소가 가득해요. 이럴 때 사용하는 관용 표현은 무엇일까요?",
            options: ["입이 귀에 걸리다", "코를 찌르다", "눈을 돌리다", "귀가 따갑다"],
            answer: "입이 귀에 걸리다"
          },
          { question: "친구가 힘든 일을 겪고 있어서 마음이 아파요. 이럴 때 사용하는 관용 표현은 무엇일까요?",
            options: ["가슴이 아프다", "눈에 불을 켜다", "입에 발린 소리", "코웃음을 치다"],
            answer: "가슴이 아프다"
          },
          { question: "믿을 수 없는 상황을 보게 되었어요. 이럴 때 사용하는 관용 표현은 무엇일까요?",
            options: ["눈이 뒤집히다", "귀가 간지럽다", "코를 골다", "눈을 의심하다"],
            answer: "눈을 의심하다"
          },
          { question: "친구가 좋은 일로 상을 받아 모두가 부러워하고 있어요. 자신감이 생긴 친구를 표현하는 관용 표현은 무엇일까요?",
            options: ["어깨가 으쓱하다", "발등을 찍다", "입을 다물다", "귀를 막다"],
            answer: "어깨가 으쓱하다"
          },
          { question: "어려운 문제를 해결하려고 많은 노력을 했지만 실패했어요. 안타깝지만 포기를 하려고 할 때 사용하는 관용 표현은 무엇일까요?",
            options: ["손을 털다", "발 벗고 나서다", "머리를 식히다", "허리를 굽히다"],
            answer: "손을 털다"
          },
          { question: "갑작스러운 상황에 너무 놀라고 말았어요. 이럴 때 활용할 수 있는 관용 표현은 무엇일까요?",
            options: ["머리가 굳다", "귀가 얇다", "간이 콩알만 해지다", "정신을 차리다"],
            answer: "간이 콩알만 해지다"
          },
          { question: "무서운 놀이기구를 탈 때 친구가 앞장서서 맨 앞 자리에 탔어요. 이처럼 겁이 없고 대담한 친구를 표현하는 관용 표현은 무엇일까요?",
            options: ["간이 크다", "간이 붓다", "입을 모으다", "코를 높이다"],
            answer: "간이 크다"
          },
          { question: "중요한 물건을 잃어버려서 급하게 찾아야 하는 상황에서 여러 곳을 뛰어다니며 찾고 있을 때 활용할 수 있는 관용 표현은 무엇일까요?",
            options: ["발에 땀이 나다", "손을 놓다", "이를 악물다", "눈을 피하다"],
            answer: "발에 땀이 나다"
          },
        ]
      },
    ]
  },
  { 
    name: "수학", 
    image: "https://cdn.pixabay.com/photo/2018/10/01/15/59/education-3716578_1280.jpg", 
    units: [
      { 
        name: "1단원",
        questions: [
        { 
          question: "\\( \\frac{2}{3} \\div \\frac{4}{5} \\)는 얼마인가?", 
          options: ["\\( \\frac{5}{6} \\)", "\\( \\frac{3}{10} \\)", "\\( \\frac{10}{12} \\)", "\\( \\frac{3}{8} \\)"], 
          answer: "\\( \\frac{5}{6} \\)", 
          image: "https://cdn.pixabay.com/photo/2018/10/01/15/59/education-3716578_1280.jpg" // 문제에 첨부할 이미지 URL
        },
        { 
          question: "\\( \\frac{7}{8} \\div \\frac{1}{4} \\)는 얼마인가?", 
          options: ["\\( \\frac{1}{2} \\)", "\\( 1 \\frac{3}{4} \\)", "\\( 3 \\frac{1}{2} \\)", "\\( 7 \\)"], 
          answer: "\\( 7 \\)", 
          image: "https://cdn.pixabay.com/photo/2018/10/01/15/59/education-3716578_1280.jpg" // 문제에 첨부할 이미지 URL
        },
        { 
          question: "\\( \\frac{1}{3} \\div \\frac{2}{5} \\)는 얼마인가?", 
          question: "\\( \\frac{5}{6} \\div \\frac{2}{3} \\)는 얼마인가?", 
          options: ["\\( 1 \\)", "\\( 1 \\frac{1}{4} \\)", "\\( \\frac{5}{4} \\)", "\\( \\frac{1}{2} \\)"], 
          answer: "\\( \\frac{5}{4} \\)", 
          image: "https://cdn.pixabay.com/photo/2018/10/01/15/59/education-3716578_1280.jpg"
        },
        { 
          question: "\\( \\frac{2}{3} \\div \\frac{4}{5} \\)는 얼마인가?", 
          options: ["\\( \\frac{5}{6} \\)", "\\( \\frac{3}{10} \\)", "\\( \\frac{10}{12} \\)", "\\( \\frac{3}{8} \\)"], 
          answer: "\\( \\frac{5}{6} \\)", 
          image: "https://cdn.pixabay.com/photo/2018/10/01/15/59/education-3716578_1280.jpg"
        },
        { 
          question: "\\( \\frac{7}{8} \\div \\frac{1}{4} \\)는 얼마인가?", 
          options: ["\\( \\frac{1}{2} \\)", "\\( 1 \\frac{3}{4} \\)", "\\( 3 \\frac{1}{2} \\)", "\\( 7 \\)"], 
          answer: "\\( 7 \\)", 
          image: "https://cdn.pixabay.com/photo/2018/10/01/15/59/education-3716578_1280.jpg"
        },
        { 
          question: "\\( \\frac{1}{3} \\div \\frac{2}{5} \\)는 얼마인가?", 
          options: ["\\( \\frac{5}{6} \\)", "\\( \\frac{3}{10} \\)", "\\( \\frac{5}{3} \\)", "\\( \\frac{2}{15} \\)"], 
          answer: "\\( \\frac{5}{3} \\)", 
          image: "https://cdn.pixabay.com/photo/2018/10/01/15/59/education-3716578_1280.jpg"
        },
        { 
          question: "\\( \\frac{4}{5} \\div \\frac{1}{2} \\)는 얼마인가?", 
          options: ["\\( \\frac{2}{5} \\)", "\\( \\frac{4}{10} \\)", "\\( \\frac{8}{5} \\)", "\\( 2 \\)"], 
          answer: "\\( \\frac{8}{5} \\)", 
          image: "https://cdn.pixabay.com/photo/2018/10/01/15/59/education-3716578_1280.jpg"
        },
        { 
          question: "\\( \\frac{3}{5} \\div \\frac{3}{4} \\)는 얼마인가?", 
          options: ["\\( \\frac{4}{5} \\)", "\\( \\frac{9}{20} \\)", "\\( \\frac{1}{4} \\)", "\\( 1 \\frac{1}{4} \\)"], 
          answer: "\\( \\frac{4}{5} \\)", 
          image: "https://cdn.pixabay.com/photo/2018/10/01/15/59/education-3716578_1280.jpg"
        },
        { 
          question: "\\( \\frac{1}{2} \\div \\frac{3}{8} \\)는 얼마인가?", 
          options: ["\\( \\frac{1}{3} \\)", "\\( \\frac{4}{3} \\)", "\\( 1 \\frac{1}{3} \\)", "\\( 2 \\)"], 
          answer: "\\( 1 \\frac{1}{3} \\)", 
          image: "https://cdn.pixabay.com/photo/2018/10/01/15/59/education-3716578_1280.jpg"
        },
        { 
          question: "\\( \\frac{5}{7} \\div \\frac{2}{3} \\)는 얼마인가?", 
          options: ["\\( \\frac{15}{14} \\)", "\\( \\frac{5}{14} \\)", "\\( \\frac{10}{21} \\)", "\\( 1 \\frac{1}{2} \\)"], 
          answer: "\\( \\frac{15}{14} \\)", 
          image: "https://cdn.pixabay.com/photo/2018/10/01/15/59/education-3716578_1280.jpg"
        },
      ]
    },
  ]
  },
  { name: "사회", image: "https://cdn.pixabay.com/photo/2018/03/02/20/22/sktop-3194198_1280.jpg",
    units: [
      { 
        name: "1단원",
        questions: [
          { question: "일본과 한국에 대한 설명으로 올바른 것은?",
            options: ["두 나라 모두 섬나라이다.", "일본은 섬나라이고, 한국은 반도 국가이다.", "두 나라 모두 반도 국가이다.", "일본은 반도 국가이고, 한국은 섬나라이다."],
            answer: "일본은 섬나라이고, 한국은 반도 국가이다." 
          },
          { question: "아프리카 대륙의 사하라 사막은 어느 쪽에 위치해 있나요?",
            options: ["동쪽", "서쪽", "남쪽", "북쪽"],
            answer: "북쪽" 
          },
          { question: "다음 중 북유럽에 속하는 나라는 어디인가요?",
            options: ["스페인", "이탈리아", "스웨덴", "그리스"],
            answer: "그리스" 
          },
          { question: "세계에서 가장 인구가 많은 나라는 중국과 인도입니다. 이 두 나라의 인구가 많은 이유로 적절한 것은?",
            options: ["기후가 추워서", "대규모 도시가 많아서", "면적이 넓고, 역사적으로 농업 중심지였기 때문에", "자연재해가 적어서"],
            answer: "면적이 넓고, 역사적으로 농업 중심지였기 때문에" 
          },
          { question: "호주의 수도는 어디인가요?",
            options: ["시드니", "멜버른", "캔버라", "브리즈번"],
            answer: "캔버라" 
          },
          { question: "미국에서 가장 면적이 넓은 주는 어디인가요?",
            options: ["텍사스", "캘리포니아", "알래스카", "플로리다"],
            answer: "알래스카" 
          },
          { question: "아마존 우림이 지구 환경에 중요한 이유는 무엇인가요?",
            options: ["많은 동물이 살고 있어서", "식량 자원을 제공해서", "공기를 정화하고 많은 산소를 생산해서", "관광지로 인기가 많아서"],
            answer: "공기를 정화하고 많은 산소를 생산해서" 
          },
          { question: "부르즈 할리파가 위치한 도시는 어디인가요?",
            options: ["아부다비", "두바이", "뉴욕", "시드니"],
            answer: "두바이" 
          },
          { question: "이 중 가장 많은 다양한 언어가 사용되는 대륙은 어디인가요?",
            options: ["아시아", "아프리카", "유럽", "아메리카"],
            answer: "아프리카" 
          },
          { question: "동남아시아 국가 중에서 유명한 관광지로 앙코르와트가 있는 나라는 어디인가요?",
            options: ["인도네시아", "캄보디아", "필리핀", "싱가포르"],
            answer: "캄보디아" 
          },
        ]
      },
    ]
  },
  { name: "과학", image: "https://cdn.pixabay.com/photo/2017/02/01/13/53/analysis-2030265_1280.jpg",
    units: [
      { 
        name: "1단원",
        questions: [
          { question: "전기 부품을 서로 연결해 전기가 흐르도록 한 것을 무엇이라고 합니까?",
            options: ["전기 부품", "전기 제품", "전기 흐름 회로", "전기 회로"],
            answer: "전기 회로" 
          },
          { question: "다음 중 전구의 병렬연결에 대한 설명으로 옳은 것을 고르시오.",
            options: ["전구 두 개를 한 줄로 연결하는 것이다.", "전구의 직렬연결보다 전구의 밝기가 밝다.", "전구의 직렬연결보다 전구의 밝기가 어둡다.", "전구 세 개를 한 줄로 연결하는 것이다."],
            answer: "전구의 직렬연결보다 전구의 밝기가 밝다." 
          },
          { question: "다음 전기 회로에서 전구를 연결한 방법은 무엇인지 쓰시오.",
            options: ["전구의 직렬 연결", "전구의 병렬 연결", "전구의 직접 연결", "전구의 간접 연결"],
            answer: "전구의 직렬 연결",
            image: "require('../src/components/image1.jpg')"
          },
          { question: "세계에서 가장 인구가 많은 나라는 중국과 인도입니다. 이 두 나라의 인구가 많은 이유로 적절한 것은?",
            options: ["기후가 추워서", "대규모 도시가 많아서", "면적이 넓고, 역사적으로 농업 중심지였기 때문에", "자연재해가 적어서"],
            answer: "면적이 넓고, 역사적으로 농업 중심지였기 때문에" 
          },
          { question: "호주의 수도는 어디인가요?",
            options: ["시드니", "멜버른", "캔버라", "브리즈번"],
            answer: "캔버라" 
          },
          { question: "미국에서 가장 면적이 넓은 주는 어디인가요?",
            options: ["텍사스", "캘리포니아", "알래스카", "플로리다"],
            answer: "알래스카" 
          },
          { question: "아마존 우림이 지구 환경에 중요한 이유는 무엇인가요?",
            options: ["많은 동물이 살고 있어서", "식량 자원을 제공해서", "공기를 정화하고 많은 산소를 생산해서", "관광지로 인기가 많아서"],
            answer: "공기를 정화하고 많은 산소를 생산해서" 
          },
          { question: "부르즈 할리파가 위치한 도시는 어디인가요?",
            options: ["아부다비", "두바이", "뉴욕", "시드니"],
            answer: "두바이" 
          },
          { question: "이 중 가장 많은 다양한 언어가 사용되는 대륙은 어디인가요?",
            options: ["아시아", "아프리카", "유럽", "아메리카"],
            answer: "아프리카" 
          },
          { question: "동남아시아 국가 중에서 유명한 관광지로 앙코르와트가 있는 나라는 어디인가요?",
            options: ["인도네시아", "캄보디아", "필리핀", "싱가포르"],
            answer: "캄보디아" 
          },
        ]
      },
    ]
  },
  { name: "영어", image: "https://cdn.pixabay.com/photo/2017/09/07/10/07/english-2724442_1280.jpg", questions: [
    {
      question: "'읽다'의 영어 단어는?",
      options: ["read", "write", "speak", "listen"],
      answer: "read"
    },
    {
      question: "'행복한'의 영어 단어는?",
      options: ["happy", "sad", "angry", "excited"],
      answer: "happy"
    },
    {
      question: "달리다의 영어 단어는?",
      options: ["run", "walk", "jump", "swim"],
      answer: "run"
    },
    {
      question: "'아름다운'의 영어 단어는?",
      options: ["beautiful", "ugly", "bright", "dark"],
      answer: "beautiful"
    },
    {
      question: "'먹다' 의 영어 단어는?",
      options: ["eat", "drink", "cook", "bake"],
      answer: "eat" 
    },
    {
      question: "'빠른'의 영어 단어는?",
      options: ["fast", "slow", "quick", "lazy"],
      answer: "fast"
    },
    {
      question: "'좋아하다'의 영어 단어는?",
      options: ["like", "love", "hate", "prefer"],
      answer: "like"
    },
    {
      question: "'친절한'의 영어 단어는?",
      options: ["kind", "rude", "mean", "nice"],
      answer: "kind"
    },
    {
      question: "'작은'의 영어 단어는?",
      options: ["small", "big", "tall", "short"],
      answer: "small"
    },
    {
      question: "'일어나다'의 영어 단어는?",
      options: ["wake up", "sleep", "sit", "stand"],
      answer: "wake up"
    },
    {
      question: "사라지다의 영어 단어는?",
      options: ["disappear", "appear", "stay", "remain"],
      answer: "disappear"
    },
    {
      question: "'기다리다'의 영어 단어는?",
      options: ["wait", "hurry", "rush", "move"],
      answer: "wait"
    },
    {
      question: "'사랑하다'의 영어 단어는?",
      options: ["love", "like", "enjoy", "prefer"],
      answer: "love"
    },
    {
      question: "'웃다'의 영어 단어는?",
      options: ["laugh", "cry", "smile", "frown"],
      answer: "laugh"
    },
    {
      question: "'슬픈'의 영어 단어는?",
      options: ["sad", "happy", "excited", "angry"],
      answer: "sad"
    },
    {
      question: "'신나는'의 영어 단어는?",
      options: ["exciting", "boring", "tiring", "calm"],
      answer: "exciting"
    },
    {
      question: "'이해하다'의 영어 단어는?",
      options: ["understand", "know", "forget", "remember"],
      answer: "understand"
    },
    {
      question: "'도와주다'의 영어 단어는?",
      options: ["help", "assist", "support", "guide"],
      answer: "help"
    },
    {
      question: "'공부하다'의 영어 단어는?",
      options: ["study", "learn", "teach", "read"],
      answer: "study"
    },
    {
      question: "'신뢰하다'의 영어 단어는?",
      options: ["trust", "doubt", "come", "question"],
      answer: "trust"
    },
    {
      question: "'기쁜'의 영어 단어는?",
      options: ["happy", "sad", "angry", "excited"],
      answer: "happy"
    },
    {
      question: "'이기다'의 영어 단어는?",
      options: ["win", "lose", "draw", "compete"],
      answer: "win"
    },
    {
      question: "'지친, 지치는'의 영어 단어는?",
      options: ["tired", "energetic", "active", "lazy"],
      answer: "tired"
    },
    {
      question: "'기쁘게 하는'의 영어 단어는?",  
      options: ["delight", "disappoint", "bore", "annoy"],
      answer: "delight"
    },
    {
      question: "'정리하다, 조직하다'의 영어 단어는?",
      options: ["organize", "mess", "scatter", "disarrange"],
      answer: "organize"
    },
    {
      question: "'결정하다'의 영어 단어는?",
      options: ["decide", "choose", "select", "pick"],
      answer: "decide"
    },
    {
      question: "'기억하다'의 영어 단어는?",
      options: ["remember", "forget", "recall", "ignore"],
      answer: "remember"
    },
    {
      question: "'사라지다'의 영어 단어는?",
      options: ["disappear", "appear", "stay", "remain"],
      answer: "disappear"
    },
    {
      question: "'기다리다'의 영어 단어는?",
      options: ["wait", "hurry", "rush", "move"],
      answer: "wait"
    },
  ]
  },
];

const getRandomQuestions = (questions, num) => {
  const shuffled = questions.sort(() => 0.5 - Math.random()); // 문제를 랜덤하게 섞기
  return shuffled.slice(0, num); // 랜덤하게 선택한 문제 중에서 num개 선택
};


export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0); // 총 점수 상태 추가
  const [showScore, setShowScore] = useState(false);
  const [questions, setQuestions] = useState([]); // 랜덤으로 선택된 문제 저장
  const [feedback, setFeedback] = useState(""); // 정답 여부와 정답을 표시할 상태 추가
  const [showFeedback, setShowFeedback] = useState(false); // 피드백 화면 표시 상태 추가
  const [isAnswering, setIsAnswering] = useState(true); // 버튼 클릭 가능 여부 상태 추가

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedUnit(null); // 단원 초기화
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  const handleUnitSelect = (unit) => {
    setSelectedUnit(unit);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setQuestions(getRandomQuestions(unit.questions, 5)); // 랜덤으로 5문제 선택
    setFeedback(""); // 단원 선택 시 피드백 초기화
    setIsAnswering(true); // 버튼 클릭 가능 상태로 초기화
  };

  const handleAnswerOptionClick = (option) => {
    if (!isAnswering) return; // 피드백이 출력될 경우 클릭 방지

    const isCorrect = option === questions[currentQuestion].answer;
    if (isCorrect) {
      setScore(score + 1);
      setFeedback("정답입니다!"); // 정답일 때 피드백 설정
    } else {
      setFeedback(`오답입니다! 정답은 "${questions[currentQuestion].answer}"입니다.`); // 오답일 때 피드백 설정
    }

    setIsAnswering(false); // 버튼 클릭 불가능 상태로 변경
    setShowFeedback(true); // 피드백 화면 표시

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setTimeout(() => {
        setCurrentQuestion(nextQuestion);
        setShowFeedback(false); // 다음 문제로 넘어갈 때 피드백 화면 초기화
        setIsAnswering(true); // 다음 문제로 넘어갈 때 버튼 클릭 가능 상태로 변경
      }, 3000); // 3초 후에 다음 문제로 넘어감
    } else {
      // 모든 문제를 푼 후 총 점수에 현재 점수를 추가합니다.
      setTotalScore(totalScore + score + (isCorrect ? 1 : 0)); // 현재 점수와 정답 점수 추가
      setTimeout(() => {
        setShowScore(true); // 3초 후에 점수 화면 표시
      }, 3000); // 마지막 문제를 푼 후 3초 대기
    }
  };

  const handleReset = () => {
    setSelectedCategory(null);
    setSelectedUnit(null);
    setCurrentQuestion(0);
    setShowScore(false);
    setFeedback("");
    setIsAnswering(true); // 버튼 클릭 가능 상태로 초기화
  };

  useEffect(() => {
    if (selectedUnit) {
      // MathJax가 수식을 렌더링하도록 호출
      window.MathJax && window.MathJax.typeset();
    }
  }, [selectedUnit, currentQuestion, showFeedback]); // 단원과 질문이 변경될 때마다 호출

  return (
    <div className="container">
      {!selectedCategory && ( // 카테고리가 선택되지 않았을 때만 히어로 섹션을 표시
        <div className="hero">
          <h1>퀴즈 풀이 웹앱</h1>
          <p>원하는 카테고리를 선택하여 퀴즈를 풀어보세요!</p>
          <p>총 점수: {totalScore}점</p>
        </div>
      )}
      {!selectedCategory ? (
        <div className="categories">
          {categories.map((category) => (
            <div key={category.name} className="category" onClick={() => handleCategorySelect(category)}>
              <img src={category.image} alt={category.name} className="category-image" />
              {category.name}
            </div>
          ))}
        </div>
      ) : !selectedUnit ? (
        <div className="units">
          {selectedCategory.units.map((unit) => (
            <button key={unit.name} className="unit" onClick={() => handleUnitSelect(unit)}>
              {unit.name}
            </button>
          ))}
        </div>
      ) : showScore ? (
        <div>
          <div className="score">당신의 점수는 {score}점입니다!</div>
          <button className="reset-button" onClick={handleReset}>대시보드로 돌아가기</button> {/* 클래스 추가 */}
        </div>
      ) : (
        <>
          <div className="question" dangerouslySetInnerHTML={{ __html: questions[currentQuestion].question }} />
          {questions[currentQuestion].image && (
            <img 
              src={questions[currentQuestion].image} 
              alt="문제 이미지" 
              style={{ maxWidth: '100%', height: 'auto' }} 
            />
          )}
          {questions[currentQuestion].options.map((option) => (
            <button 
              key={option} 
              className="button" 
              onClick={() => handleAnswerOptionClick(option)} 
              dangerouslySetInnerHTML={{ __html: option }} 
              disabled={!isAnswering} // 버튼 클릭 가능 여부에 따라 비활성화
            >
            </button>
          ))}
          {showFeedback && (
            <div className="feedback feedback-large">
              <span dangerouslySetInnerHTML={{ __html: feedback }} />
            </div>
          )}
        </>
      )}
    </div>
  );
};