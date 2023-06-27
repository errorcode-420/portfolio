export const enTranslations = {
   navbar: {
     home: 'Home',
     about: 'About',
     projects: 'Projects',
     skills: 'Skills',
     experience: 'Experience',
     education: 'Education',
   },
   about: {
     title: 'About Me',
     description: {
       '1': 'Welcome to my website!',
       '2': 'Here, I showcase my past and future self-programmed projects and share my passion for web development and machine learning. My goal is to find a suitable job where I can leverage my skills and interests through my work.',
       '3': 'One of my current projects is a bird-identification-application where I combine web development and machine learning. I have been working enthusiastically on it since May 2023, and although the project is still in development, you can already access a working version.',
       '4': 'My programming journey started in April 2020 during my studies when I dedicated my free time to programming. What began as a personal interest quickly turned into a passion that motivated me to pursue a career in this field.',
       '5': 'To facilitate my entry into the industry, I completed an intensive nine-month bootcamp for data analysts at Masterschool. During this time, I had the opportunity to deepen my knowledge and gain practical experience. Following that, I started working at Semotec GmbH, a small IT company in Vienna specializing in web development. There, I was involved in an impressive project, the E-Vault for A-Trust, which was implemented and maintained over a span of 10 years. Due to the company\'s size, I was able to engage with various aspects of development and gain valuable experience in both frontend and backend development.',
       '6': 'After finishing my employment, I decided to expand my skills and started learning the modern framework Angular to enhance my efficiency at programming.',
       '7': 'In parallel with my professional experience, I realized a personal online shop project from scratch, which provided me with a lot of knowledge and practical skills.',
       '8': 'I invite you to explore my website and get an overview of my projects. If you have any questions or are interested in collaborating, feel free to contact me. Thank you for visiting!',
     },
     personal: {
       position: {
         property: 'Position',
         value: 'Web Developer',
       },
       experience: {
         property: 'Experience',
         value: '3 Years',
       },
       age: {
         property: 'Age',
         value: '26',
       },
       place_of_birth: {
         property: 'Place of Birth',
         value: 'Munich, Germany',
       },
       languages: {
         property: 'Languages',
         value: 'German, English, Spanish (Beginner)',
       },
     },
   },
   projects: {
     title: 'Projects',
     buttons: {
       source: {
         label: 'Code',
         tooltip: 'View source code',
       },
       preview: {
         label: 'View',
         tooltip: 'Go to website',
       },
       expand: {
         label: 'Show more',
         tooltip: 'Show more details',
       },
       collapse: {
         label: 'Show less',
         tooltip: 'Show less details',
       },
     },
     birds: {
       title: 'Bird Identicifaction',
       description:{
        '1': 'In this project, users should be able to identify bird species based on images. Using a powerful TensorFlow model, I have developed a solution that helps nature and bird enthusiasts recognize various bird species. The project is still in progress and can currently distinguish between 50 bird species found in North America',
        '2': ' More species and regions are to be added in the future.',
        '3': 'The functionality of my application is simple: users upload a photo of a bird, and my TensorFlow model analyzes the image to identify the corresponding bird species. The model utilizes advanced machine learning algorithms to recognize visual characteristics of the bird and match them with an extensive database of bird species.',
        '4': 'To verify the accuracy of the identification, I have integrated two sample photos of the same bird species into the application. After the model identifies the bird, these example images are displayed for users to confirm whether the identification was correct. This allows for result validation and enhances confidence in the accuracy of my application.',
        '5': 'My project is still under development, and I have ambitious plans for the future. I intend to expand the number of known bird species in my database to further enhance identification capabilities. I strive to curate a comprehensive collection of bird species to provide nature enthusiasts with an even greater variety of identification options.',
        '6': 'I am excited about the possibilities that my bird species identification web application offers, and I am continuously working to improve it. I invite you to try out my application and contribute to expanding my knowledge of bird species. Together, we can make the world of bird observation more accessible and fascinating.',
        },
       date: 'May 2023 - July 2023'
     },
     onlineshop: {
       title: 'Online Shop',
       description: {
         '1': 'The Angular Online Shop is a demo application developed to put the newly acquired knowledge into practice. It is not a real online store, but a simulation that allows testing different concepts and functions. It is not a real online store, ',
         '2': 'but a demo, which allowed me to test different concepts and functions.',
         '3': 'The demo application offers a variety of products from different categories. Users can browse the products, view details, and add them to the shopping cart. The shopping cart allows users to review their selected products and go through the order processing flow.',
         '4': 'It is important to note that this demo is a pure testing environment. There are no real products or payment functionalities. Therefore, users can test all features and processes without actually spending money.',
         '5': 'The demo application also includes an admin tool that provides additional functionalities. In the admin view, the administrator has the ability to add new products and delete existing products. Additionally, the administrator can view and manage all orders. Google Authentication is implemented for authentication, ensuring that only authorized users have access to the admin features.',
         '6': 'Once a user has successfully logged in, they gain access to their own product and order data. This allows testing of all functions, such as deleting or adding products, without affecting the overall dataset and compromising other users\' data.',
       },
       date: 'March 2023 - May 2023'
     },
     masterschool: {
      title: 'Data Analytics',
      description: {
        '1': 'During my nine-month bootcamp at Masterschool, I completed several analysis projects. At the end of each chapter, there was a project related to the topic covered, such as Data Preprocessing. Additionally, there were three larger projects that required knowledge from the previous chapters, culminating in a major final project. All of these projects were conducted using Jupyter Notebooks, and I have provided links to all of them here. Throughout the bootcamp, these projects allowed me to apply the knowledge I acquired and deepen my skills in data analysis. They provided practical opportunities to tackle',
        '2': ' real-world data problems and solidify my understanding of various analytical techniques.',
        '3': 'The three larger projects specifically challenged me to leverage the knowledge gained from earlier chapters. By solving more complex data problems, I honed my analytical abilities and further developed my expertise in data-driven decision-making.',
        '4': 'By linking all of these projects in my portfolio, I offer you direct access to the results of my work. This way, you can explore my approach to analysis projects and gauge my technical proficiency in data analysis.',
      },
      date: 'December 2020 - August 2021'
    },
   },
   skills: '',
   experience: {
     title: 'Experience',
     semotec: {
       company: 'Semotec - IT Services GmbH',
       job: 'Web Developer - Project E-Vault',
       task: {
         '1': 'Resolving tickets or bug reports to identify, debug, and fix issues in web applications.',
         '2': 'Performing refactoring work to optimize existing code, improve maintainability, and increase application efficiency.',
         '3': 'Implementing new features.',
         '4': 'Documenting code, system architecture, and development steps to ensure maintainability and traceability.',
         '5': 'Creating and executing SQL queries for data manipulation, query optimization, and database integration in web applications.',
         '6': 'Merging code changes and branches using version control systems like TortoiseHg and Git.',
       },
       date: 'March 2021 - March 2023',
     },
     masterschool: {
      company: 'Masterschool',
      job: 'Data Analytics - Coding Bootcamp',
      task: {
      '1': 'Business Analytics - Fundamentals',
      '2': 'Data Visualization and Storytelling',
      '3': 'Python - Fundamentals',
      '4': 'Data Analysis with Python',
      '5': 'Intro to Data Science',
      '6': 'Final Practical Project: "Identifying Ineffective Operators"',
      },
      date: 'December 2020 - August 2021',
      },
   },
   education: {
     title: 'Education',
     masterschool: {
       institution: 'Masterschool',
       degree: 'Certificate - Data Analyst',
       program: 'Data Analyst - Coding Bootcamp',
       date: 'December 2020 - August 2021',
     },
     boku: {
       institution: 'University of Natural Resources and Life Sciences, Vienna',
       degree: 'Bachelor of Science',
       program: 'Environmental and Bioresource Management',
       date: 'March 2016 - February 2020',
     },
     school: {
       institution: 'Vilshofen Gymnasium, Vilshofen a. d. Donau',
       degree: 'General Abitur',
       program: 'High School',
       date: 'September 2007 - April 2015',
     },
   },
 };
 