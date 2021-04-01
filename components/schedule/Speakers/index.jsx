import React from 'react';
import styled from "@emotion/styled";
import Fade from "react-reveal/Fade";

import SpeakerCard from "./SpeakerCard";


const TrainingModuleWrap = styled.section`
    background: #112;
    color: #eee;
    min-height: 45vh;
    padding: 5vh 2vw;
    h2 {
       font-size: calc(1.5rem + 1.5vw);
       font-weight: 600;
       margin-bottom: 0.75rem;
       color: #FFAB00;
       text-align: center;
    }
    p {
      color: #EEE;
      font-size: 14px;
      line-height: 1.5;
      padding: 0.5rem;
      margin-bottom: 8px;
   }
   a {
      color: #fd7e14;
      font-size: 14px;
      text-decoration: none!important;
      &:hover {
        color: white;
      }
   }
`;

const ShaktiSpeakers = ({ hideTitle = false }) => {

    const PreConfList = [
        {
            "slug": "cybersecurity-for-iot-ics",
            "title": "Cybersecurity for IOT/ICS",
            "registerURL": "https://register.shakticon.com/",
            "sessions": [
                {
                    "date": "Friday, 2nd April",
                    "time": "20:00 IST"
                }
            ],
            "abstract": <>
                In this talk, you will learn about the challenges faced around cybersecurity in IOT, with special
                focus on ICS environment. The talk will also cover recent trends in the threat landscape and a
                wholistic approach towards a more secure manufacturing environment.
            </>,
            "speaker": {
                "name": "Jhilmil Kochar",
                "designation": "Managing Director",
                "company": "CrowdStrike, Pune, India",
                "image": require('../../../images/speakers/jhilmil.jpeg'),
                "bio": <p>
                    Jhilmil has been serving as the Managing Director, CrowdStrike India for the past 4 years.
                    She set up the India team from scratch and has been delivering security products for IT
                    security operations. She comes armed with 25+ years of technology leadership experience in
                    domains spanning Cybersecurity, Telecom and Networking, Semiconductor and IOT, Gaming and
                    Multimedia. Earlier she led the India center for WMS Gaming, a Scientific Games company.
                    Prior to that she has worked as in various engineering leadership roles at McAfee and
                    Conexant Systems.
                </p>
            },
        },
    ];

    const SpeakersList = [
        {
            "slug": "keynote",
            "title": "Keynote",
            "speaker": {
                "name": "Rinki Sethi",
                "designation": "Vice President & CISO",
                "company": "Twitter",
                "image": require('../../../images/speakers/rinki_sethi.jpg'),
                "links": {
                    "twitter": "https://twitter.com/rinkisethi",
                    "linkedin": "https://www.linkedin.com/in/rinkisethi"
                },
                "bio": <p>
                    Rinki Sethi is a vice president and the Chief Information Security Officer at Twitter Inc.
                    She was earlier a Information Security Executive at IBM from 2018 to 2019. She has also
                    worked with companies like Walmart, Intuit, Ebay and others as a CISO and security expert. She
                    also serves as an advisor to several startups, including LevelOps, Authomize, and Cybersecurity
                    organizations, like Women in Cybersecurity. She was recognized by CSO Magazine & Executive Women's
                    Forum with the "One to Watch" award, and in 2010, lead a team at eBay to receive the
                    "Information Security Team of the Year" by SC Magazine.
                </p>
            }
        },
        {
            "slug": "from-technologist-to-board-room",
            "title": "From Technologist to Board Room...a cybersecurity journey",
            "abstract": <>
                In her session, Sanju will review her 25 year long career path along with a few stories. 
                She hopes to leave you with her learnings and open up the conversation to your questions.
            </>,
            "speaker": {
                "name": "Sanju Misra",
                "designation": "Chief Information Security Officer (CISO)",
                "company": "Linde",
                "image": require('../../../images/speakers/sanju_misra.jpg'),
                "links": {
                    "linkedin": "https://www.linkedin.com/in/sanjumisra/"
                },
                "bio": <p>
                    Sanju fell into the cyber security field 25 years ago. Her subject matter expertise in 
                    security engineering, security analysis then team leader helped to launch her into chief
                    information security officer roles at General Electric Treasury, Praxair and Linde.
                    The skills she gained as a technologist aren’t the same skills required to
                    present to board rooms and have a seat at the table with business leaders. 
                </p>
            },
        },
        {
            "slug": "threat-modeling",
            "title": "Threat Modeling",
            "abstract": <>
                In this talk, you will learn why Threat Modeling (TM) is important, what TM is (what it can prevent
                and what it cannot), and how TM fits into the overall Product Development Lifecycle and Secure
                Development Lifecycle. This talk will also introduce various threat modeling methodologies.
            </>,
            "speaker": {
                "name": "Sung Lee",
                "designation": "Staff Security Architect",
                "company": "VMware",
                "image": require('../../../images/speakers/sung.JPG'),
                "links": {
                    "linkedin": "https://www.linkedin.com/in/sylee/",
                },
                "bio": <p>
                    Sung joined VMware in 2020 as a security architect. She developed an interest in security in the
                    early 2000s, while she was leading a research team in the area of Pervasive Computing, a
                    predecessor of Internet of Things. Prior to joining VMware, she served in various roles at several
                    companies, including product development, R&D, standards development, and defining product and
                    business strategy. She received B.S., M.S., and Ph.D. degrees in Computer Science from the
                    University of Maryland, College Park
                </p>
            },
        },
        {
            "slug": "Kick-start to Secure Software Development ",
            "title": "Kick-start to Secure Software Development ",
            "abstract": <>
               We read, write and understand Code!<br/>
               There is a popular misconception that anyone who code can develop a secure and reliable software. 
               Developers can build a working software, but not always secured, reliable and an efficient one. 
               Who would buy that? If someone does, for how long would it serve! <br />
               <br />
               This talk would focus on Secure Software Development. Take you through the overall software development architecture, an active 
               check on the frequent mistakes and regular misunderstandings in software development, followed 
               by an in-depth understanding of each stage with a quick glance into the adversary entry points. 
               Finally, introducing secure coding a vast domain which plays an important role in Secure Software 
               Development.<br />
               <br />
               This session might provide a better perspective to the Developers, Testers and Security enthusiasts about the systems and techniques in place as well their relevance.
            </>,
            "speaker": {
                "name": "Arya M Sankar ",
                "designation": "Security Researcher",
                "company": " Siemens",
                "image": require('../../../images/speakers/arya.JPG'),
                
                "bio": <p>
                    As a Security Researcher at Siemens she is currently into Secure Software Development (R&D) and Cyber Security Analyst roles. She is focusing on Application security with keen interest in Secure Software Development and Secure Coding. She has prior experience in Penetration Testing, Malware Analysis and Vulnerability Assessments. Pursued Masters in Cyber Security Systems & Networks with Bachelors in Computer Science Engineering.
                </p>
            },
        },
        {
            "slug": "ctfs-and-cybersecurity-research",
            "title": "CTFs and cybersecurity research",
            "abstract": <>
                In this talk, Tiffany Bao will share her experience of CTF and introduce the CTF-related
                research, cyber autonomy in software security. The idea of cyber autonomy emerges due to
                the large scale of software programs in daily practice. While security researchers have 
                been pursuing automated vulnerability detection and remediation techniques to scale beyond 
                the limitations of human hackers, the human bottleneck (and human fallibility) remains in 
                the higher-level strategy of what to do with automatically identified vulnerabilities, 
                automatically created exploits, and automatically generated patches.
                
                Removing the bottlenecks requires not only automatic techniques but also intelligent decision 
                makings, which we call autonomy, a further step of automation in software security. In this 
                talk, I will delve into the challenges in cyber autonomy, introducing our recent work and 
                discussing the future steps that mature cyber autonomy into real-world practice.
            </>,
            "speaker": {
                "name": "Tiffany Bao",
                "designation": "Assistant Professor",
                "company": "Arizona State University",
                "image": require('../../../images/speakers/tiffany.jpg'),
                "bio": <p>
                    Tiffany Bao is an Assistant Professor at Arizona State University. Her research interests 
                    are aspects of software security, including techniques, measurements, and strategies to discover, 
                    assess, and defend software vulnerabilities. Tiffany Bao received her Ph.D. at Carnegie Mellon 
                    University advised by Prof. David Brumley.
                </p>
                
            },
        },
        {
            "slug": "cyber-event-how-to-treat-it-right",
            "title": "Cyber Event - How to treat it right?", 
            "abstract": <>
                We will talk about how  to treat cyber event from the view of SOC and Digital Forensics Investigators team. 
                What do we investigate? How to react when we know it’s not false positive event? What evidences do we have 
                and what do we want to investigate? 
            </>, 
            "speaker": {
                "name": "Liora Itkin",
                "designation": "Head of Cybersecurity Department (of SOC and DFIR teams)",
                "company": "Israel Ministry of Defense",
                "bio": <p>
                    Leading a Cyber Security Defense Department: <br />
                    ✔️ SOC team<br />
                    ✔️ Digital Forensics Investigators and Incident Response team<br />
                    Skilled in the areas of in cyber attacks, malware analysis, threat hunting, cyber analysis, networking and system. <br />
                </p>,
                "image": require('../../../images/speakers/lioraitkin.jpeg'),
            },
        },
        {
            "slug": "cybersecurity-in-the-ot-enviroment",
            "title": "Cybersecurity in the OT enviroment",
            "abstract": <>
                In this talk, Luisa Montealegre will share her career path and how she, as a female mechanical engineer from Costa Rica, 
                ended up being a cybersecurity specialist in Europe. She will also share her experience in the Operational Technology(OT) 
                environment and the challenges of cybersecurity in this field. 
            </>, 
            "speaker": {
                "name": "Luisa Montealegre",
                "designation": "OT Cybersecurity Specialist",
                "company": "Siemens",
                "image": require('../../../images/speakers/luisa.jpeg'),
                "links": {
                    "linkedin": "https://www.linkedin.com/in/luisa-montealegre-8a491287/",
                },
                "bio": <p>
                    Luisa Montealegre is an OT Cybersecurity Specialist at Siemens. With Mechanical engineering as a background 
                    and international experience working in cybersecurity in the USA, Latin America, and Europe, she works developing 
                    the OT cybersecurity services for Siemens factories around the world. Her main goal is to achieve secure and 
                    certification ready factories with resilient environments. She holds a master’s degree in cybersecurity systems 
                    from Lleida University. 
                </p>,
            },
        },
        {
            "slug": "privacy-preserving-data-analysis",
            "title": "Privacy Preserving Data Analysis",
            "abstract": <>
                Information sharing brings mutual benefit for governments, military services, corporates, financial
                organizations,  health centers,  individuals, and even competitors. This benefit is resulted from
                the additional intelligence that is inferred through collaborative data analysis. Such an intelligence
                can be used to improve revenues, e.g. through best practice sharing, market basket analysis,
                preventing loss coming from brand-new potential cyber-threats, analysis of medical data. Independently
                from the final goal,   information sharing brings issues and drawbacks related to information privacy.
                Shared information might be sensitive, potentially harming the privacy of physical persons, such as
                employee records for business applications, or patient records for medical ones. In this talk, we
                discuss the privacy issues in data sharing and we present the solutions for some specific scenarios
                in this regard.
            </>,
            "speaker": {
                "name": "Mina Sheikhalishahi",
                "designation": "Security Researcher",
                "company": " Eindhoven University of Technology",
                "image": require('../../../images/speakers/mina_sheikhalishahi.jpg'),
                "links": {
                    "linkedin": "https://linkedin.com/in/mina-sheikhalishahi-3184757a",
                },
                "bio": <p>
                    Mina Sheikhalishahireceived her Ph.D. in Computer Science at Laval University, Canada,
                    in 2016,with a Ph.D. thesis on "Spam Campaign Detection, Analysis and Formalization". She
                    joined the "Security Group" at Institute forInformatics and Telematics of CNR, Italy as postdoc
                    in 2016. She visited the Security Group at Delft University in 2018. Currently, she is a
                    post-doc researcher in the Security Group at Eindhoven University of Technology. Her research
                    is mainly focused on privacy preserving data analysis.
                </p>
            },
        },
        {
            "slug": "techniques-and-tooling-with-flare-on-20",
            "title": "Techniques and Tooling with Flare-on'20",
            "abstract": <>
                Flare-on is famous CTF style challenge conducted by FireEye where the main focus 
                is on reverse engineering variety of formats including windows and Linux.  In this 
                talk, we will discuss how to approach flare-on, what all are the tools and techniques 
                that will help in understanding and solving the challenges and walkthrough of some of 
                the interesting challenges of flare-on 2020.
            </>,
            "speaker": {
                "name": "Sreelakshmi Panangatt",
                "designation": "Security Engineer",
                "company": "VMware",
                "image": require('../../../images/speakers/sreelakshmi.JPG'),
                "links": {
                    "linkedin": "https://www.linkedin.com/in/sreelakshmi-panangatt-b67b58105/"
                },
                "bio": <p>
                    Sreelakshmi is a security Engineer working for VMware product security team. 
                    Her responsibilities include vulnerability assessment and attack surface analysis. 
                    She is one of the winners of flare-on 2020. She holds a master’s degree in cybersecurity 
                    systems from Amrita University and Vrije University, Amsterdam. More about her works can 
                    be found at <a href="https://sreelakshmip.wordpress.com/">https://sreelakshmip.wordpress.com</a>. 
                </p>
            },
        },
        {
            "slug": "welcome-note",
            "title": "Welcome Note",
            "abstract": <>
                Sreepriya will deliver the welcome note for ShaktiCon. She will provide a glimpse into
                how the idea of ShaktiCon came about, what has been achieved so far and what our goals 
                and aspirations are. 
            </>,
            "speaker": {
                "name": "Sreepriya Chalakkal",
                "designation": "Security Analyst",
                "company": "Siemens ProductCERT",
                "image": require('../../../images/crew/sreepriya_chechi.jpg'),
                "links": {
                    "linkedin": "https://www.linkedin.com/in/sreepriyac/",
                    "twitter": "https://twitter.com/priyachalakkal"
                },
                "bio": <p>
                    Sreepriya is a Security Analyst at Siemens ProductCERT, where she focuses on vulnerability 
                    handling and incident response. Previously she worked as a pentester at Ernw GmbH, Germany, 
                    in the mobile security team. She enjoys playing with security challenges in applications, 
                    networks and binaries. She is mentor of TeamShakti, a women CTF team from India. Also, core 
                    organiser of <a href="https://shakticon.com">ShaktiCon</a>, a women only security conference. Also serves 
                    as a board member of <a href="https://blackhoodie.re">BlackHoodie</a>. Completed masters from Technical 
                    University of Berlin and University of Trento with major Computer Security and Privacy in March 2017.
                </p>
            },
        },
        {
            "slug": "introduction-to-fuzzing",
            "title": "Introduction to Fuzzing",
            "speaker": {
                "name": "Allison Marie Naaktgeboren",
                "isTrainer": true,
                "designation": "PHd Student",
                "company": "Portland State University",
                "image": require('../../../images/speakers/allison.jpg'),
                "links": {
                    "linkedin": "https://www.linkedin.com/in/a-m-naaktgeboren/"
                },
                "bio": <p>
                    Allison Marie Naaktgeboren is a cybersecurity doctoral researcher (fancyspeak for PhD student) and
                    a semi-retired senior software engineer. Her current research focuses on fuzzing. She has a
                    Bachelor’s Degree in Computer Science from Carnegie Mellon University. She has previously written
                    (and regretted) code at Signal Sciences, Mozilla, Amazon, Cisco, FactSet Research Systems, and the
                    Biorobotics Laboratory. She run the Portland State Security Club & CTF team and an all women’s CTF
                    team in Portland. She is part of the WomenWhoCode PDX and OWASP PDX leadership teams.
                </p>
            },
        },
        {
            "slug": "machines-learning-for-security",
            "title": "So you want to try your hand at machine learning for security…",
            "abstract": <>
                Security expertise is scarce. Machine learning and AI can help defenders scale and provide protection
                from attackers. This talk will cover real case studies of what applications of ML in security look
                like and the major challenges in implementing them. We will discuss the challenges of translating
                cutting edge ML research into different aspects of security (AV, IDS, TI etc). If you are interested
                in dipping your toes in this powerful domain, we will share tools and resources to get started.
            </>,          
            "speaker": {
                "name": "Bhavna Soman",
                "designation": "ML Security Researcher",
                "company": "Microsoft",
                "image": require('../../../images/speakers/bhavana.JPG'),
                "links": {
                    "twitter": "https://twitter.com/bsoman3",
                },
                "bio": <p>
                    Bhavna Soman is a Senior Security Research Lead working for the Microsoft Defender Research Team.
                    In her day job, she develops Machine Learning models to classify malware in real time. In the past
                    she worked in the field of Threat Intelligence and loves to play with Natural Language processing
                    algorithms. Bhavna holds a master's degree in Computer Security from Georgia Tech and is also a
                    trainer for Malware Reverse Engineering with Blackhoodie.
                </p>
            },
        },
        {
            "slug": "understanding-bluetooth-security",
            "title": "Understanding Bluetooth security.",
            "speaker": {
                "name": "Renu D S",
                "designation": "Penetration Test Engineer",
                "company": "Schneider-Electric",
                "image": require('../../../images/speakers/renuds.png'),
                "links": {
                    "linkedin": "http://linkedin.com/in/priti-shrivastav-59878a2"
                },
                "bio": <>
                     Renu D S is a Penetration Test Engineer at Schneider-Electric with an overall experience of 2.5 years 
                     mainly focusing on embedded, wireless and web security.",
                </>
            }
        },
        {
            "slug": "software-security-pragmatic-approach",
            "title": "A pragmatic approach on software security",
            "speaker": {
                "name": "Priti Shrivastav",
                "designation": "Former General Manager Software Security",
                "company": "Intel Corporation",
                "image": require('../../../images/speakers/priti.jpeg'),
                "links": {
                    "linkedin": "http://linkedin.com/in/priti-shrivastav-59878a2"
                },
                "bio": <p>
                    Former General Manager Software Security at Intel corporation. Nine years managed security of all 
                    the software products in the area of operating systems, cloud services, developers tools, 
                    performance libraries, AI SDKs,  graphics software, compilers, and many security solutions at Intel. 
                    Prior to working on security Priti Shrivastav managed various products like compilers, binary translation software, 
                    parallel advisor and other important products and services at Intel. She has MS in Computer Science from 
                    Ohio University, US and MS in Math/CS from IIT Delhi, India. She is passionate about promoting women in 
                    cyber security to reach their professional goals.
                </p>
            }
        },
        {
            "slug": "internet-of-drones-security",
            "title": "Internet of Drones Security",
            "abstract": <>
                With an increased data rate, lower latency and high reliability, 5G network is becoming the key technology 
                serving Internet of Things (IoT) and subsequently Internet of Drones (IoD) connectivity. Connected Unmanned 
                Aerial Vehicles (UAVs) or drones would be widely deployed by government entities as well private enterprises 
                for various applications namely smart city, transportation, industry and digital health. Some of these 
                applications carry critical missions such as military, public safety, mobility, energy and emergency services, 
                where an anomaly in the original function means the difference between life and death. Therefore, a secure 
                architecture and communication is a major consideration for the entities that provide mentioned services.
            </>,
            "speaker": {
                "name": "Mehrnoosh Monshizadeh",
                "designation": "Cyber Security Specialist",
                "company": "Nokia Bell Labs",
                "image": require('../../../images/speakers/mehrnoosh.jpeg'),
                "bio": <p>
                    Mehrnoosh is working at Nokia Bell Labs research department as Cyber Security Specialist. 
                    Her research area includes utilizing and optimizing artificial intelligence for IoT security, 
                    Drone/Robot security, Digital Health security and cloud security (SDN/NFV). She has been working 
                    previously on development of LTE core network and Lawful Interception.
                </p>
            }
        },
        {
            "slug": "firmware-security-an-introduction",
            "title": "Firmware Security - An Introduction",
            "abstract": <>
                This talk will be centered around firmware security. We will look at the attacks on firmware, 
                and the need for firmware security. We will also look at first steps in implementing firmware 
                security and AMI's contributions towards firmware security solutions.
            </>,
            "speaker": {
                "name": "Priyadharshini Krishnan",
                "designation": "Engineering Manager",
                "company": "American Megatrends International LLC",
                "image": require('../../../images/speakers/priyadharshini.jpg'),
                "bio": <p>
                    Priyadharshini is an Engineering manager working for AMI’s Security Services and Solutions 
                    group. She currently leads a team that mainly focuses on software and firmware security 
                    solutions. Prior to this, she has been working on developing tools and applications that 
                    enable firmware development and debugging. She holds a bachelor’s degree in Computer Science 
                    and Engineering from Madras university.
                </p>
            },
        },
        {
            "slug": "recon-to-software-supply-chain-attack",
            "title": "Recon to Software Supply Chain Attack",
            "abstract": <>
                As our society is becoming more and more technologically reliant, the importance of cybersecurity 
                is on rise. A single cyber-attack can cause heavy damages to businesses. Organisations today face 
                unprecedented number of attacks that begin even before any software is ever made. Supply chain 
                attacks can damage organisations, individual departments, or entire industries by targeting and 
                attacking insecure elements of the software supply chain. A software supply chain attack infiltrates 
                software life cycle by leveraging open source components to inject malicious code in order to 
                compromise software systems further down the chain. <br />
                <br />
                The presentation will discuss how simple recon techniques like JavaScript recon, GitHub recon, 
                social engineering can lead to highly damaging software supply chain attacks and measures to 
                protect against them. <br />
                <br />
                The target audience for this talk would be anybody who is currently working or who has just 
                started in cyber security field or anybody who wants to learn something new.
            </>,
            "speaker": {
                "name": "Komal Armarkar",
                "designation": "Security Analyst",
                "company": "CrowdStrike",
                "image": require('../../../images/speakers/komal.jpeg'),
                "bio": <p>
                    Komal Armarkar is currently working as Security Analyst in Spotlight vulnerability management 
                    team at CrowdStrike. In her overall experience of 7 years, she has worked in various fields 
                    like policy compliance, Linux system administration and application security. She has a keen 
                    interest in vulnerability analysis and research, application security.
                </p>
            },
        },
        {
            "slug": "security-at-cloud-scale",
            "title": "Security at Cloud Scale",
            "abstract": <>
                In this talk, Aarti looks at the evolution of EDR technology over the years and how the cloud has 
                been leveraged to improve upon the fidelity of traditional EDR systems.
            </>,
            "speaker": {
                "name": "Aarti Gupta",
                "designation": "Director Engineering",
                "company": "CrowdStrike",
                "image": require('../../../images/speakers/aartigupta.png'),
                "bio": <p>
                    Aarti is a Director of Engineering at CrowdStrike, she is currently working on a next-gen 
                    cloud-based security product. Previously, she was Director of Engineering at Qualys and was 
                    responsible for building out Qualys’s Security Analytics platform. Aarti has extensive experience 
                    with building web scale systems, having previously worked for Amazon and Hotstar.
                </p>
            },
        },
        {
            "slug": "panel-discussion-cybercrime-and-pathways",
            "title": "Panel Discussion: Cybercrime and Pathways",
            "abstract": <>
                The panel discussion will be about the most prevalent cyber crime today in India, and the policies that 
                are being designed to tackle them. Sundari will moderate the panel discussion. She will be joined by other 
                esteemed guests. 
            </>,
            "speaker": {
                "name": "Sundari Nanda",
                "designation": "CVO & Special Commissioner(Vigilance)",
                "company": "Delhi Police",
                "image": require('../../../images/speakers/sundarinanda.jpeg'),
                "bio": <p>
                    Sundari Nanda has served with Delhi, Goa and Arunachal Pradesh Police. she has been on deputation with 
                    the Central Bureau of Investigation for seven years and also served as Commandant, 2nd Battalion of 
                    Arunachal Armed Police, deployed along with the terrorist infested border of Assam. <br />
                    <br /> 
                    Cyber Initiatives launched:<br />
                    <ul>
                        <li>She established the Cyber Crime Investigation Cell of CBI in the year 2000, which was the first 
                            in India</li>
                        <li>As DCP (Crime against Women) Cell of the Delhi Police for a short stint in 1995, she registered the first 
                            case in India on incest, which brought this hitherto cupboard issue into the open.</li>
                        <li>As the Secretary of the Delhi Police Recruitment Board during 1997, she was the first to completely 
                            computerize the recruitment.</li>
                    </ul>
                </p>
            },
        },
        {
            "slug": "cyber-security-of-embedded-networks-in-heavy-vehicles",
            "title": "Cyber Security of Embedded Networks in Heavy Vehicles", 
            "abstract": <>
                Trucks play a very role important role in driving the nation's economy, moving more than 70% of all the freights 
                transported in the US by weight. Any event that grounds all trucks even for a few days, have severe consequences, 
                including food shortages, hospitals exhausting their oxygen supplies, and gas stations running out of fuel. While 
                we have not yet faced such a situation, the way modern heavy vehicles are designed, this increasingly looks like 
                a distinct possibility. Modern day trucks are equipped with numerous sensors, embedded controllers, communication 
                networks, and electro-mechanical systems that work in tandem to improve their performance, efficiency, safety, 
                connectivity, and user-experience. However, they also bring up serious cyber threats to the truck's operation. <br />
                <br />
                In this talk, we discuss cyber security in the context of modern day trucks and heavy vehicles. We discuss 
                vulnerabilities our group has identified that span across all modern day heavy vehicles and allow a hacker to 
                access the embedded controller network of a truck to cause different types of attacks including ones that cause 
                a truck to not be able to start or stop.  We present some approaches for detecting attacks in real-time and show 
                how we can distinguish them from  safety-critical events. We have developed reporting tools and techniques that 
                can aid the heavy vehicle drivers in near real-time to make informed decisions in the event of a cyber attack. 
                We conclude  by discussing some of our future research directions in heavy vehicle security.
            </>, 
            "speaker": {
                "name": "Indrakshi Ray",
                "designation": "Professor, Computer Science Department",
                "company": "Colorado State University", 
                "image": require('../../../images/speakers/indrakshiray.jpeg'),
                "bio": <p>
                    Dr. Indrakshi Ray is a Professor in the Computer Science Department at Colorado State University. She is the 
                    Director of Colorado Center for Cyber Security at Colorado State University. She is also the Site Director of 
                    NSF IUCRC Center for Cyber Security Analytics and Automation. Dr. Ray  has been a visiting faculty at Air Force 
                    Research Laboratory, Naval Research Laboratory, and at INRIA, Rocquencourt, France. She obtained her Ph.D. in 
                    Information Technology from George Mason University. <br />
                    <br />
                    Dr. Ray's research interests include  software assurance, data analytics and security. She has published 
                    almost two hundred technical papers in refereed journals and conference proceedings with the support from agencies 
                    including Air Force Research Laboratory, Air Force Office of Scientific Research, National Institute of Health, 
                    National Institute of Standards and Technology, National Science Foundation, the United States Department of 
                    Agriculture, and industries from the US, Norway, and Japan. <br />
                    <br /> 
                    Dr. Ray is on the editorial board of IEEE Transactions on Services Computing, International Journal of Information 
                    Security, Computer Standards and Interfaces, and Associate Editor of IEEE Security & Privacy. She was a member 
                    of the editorial board of IEEE Transactions on Dependable and Secure Computing. She serves on the program committees 
                    of various prestigious conferences and has chaired many of them. Dr. Ray  is a senior member of the IEEE and a senior 
                    member of the ACM. Dr. Ray is also active in endeavors trying to increase minority participation in Computer Science.
                </p>,
            },
            
        },
        {
            "slug": "decoding-the-cybersecurity-career-path",
            "title": "Decoding the Cybersecurity Career Path",
            "abstract": <>
                The cybersecurity skill shortage is getting worse and the industry is in huge demand for skilled cybersecurity 
                professionals. But on the other hand industries still find it challenging to recruit right talents for their 
                open position due to shortage of skilled professionals for a particular job profile. One of the reason for 
                this is that cybersecurity aspirants and graduates are not sure on how to start their career in this industry. 
                These young aspirants are so overwhelmed with lot of resources, online courses and blogs, that they feel lack 
                of focus or clarity in their career goals. Many kinds of job roles are available within cybersecurity and many 
                aspirants don't have a visibility on what these roles are all about and hence not able to judge whether a particular 
                role is right fit for them or not. This talk covers an overview on how to start a career in cybersecurity, 
                different roles and career option available in cybersecurity . This talk would also cover on certain aspects on 
                how to advance in this career from Entry level to Senior Level.
            </>, 
            "speaker": {
                "name": "Sabna Sainudeen",
                "designation": "President",
                "company": "(Women in CyberSecurity) WiCyS India ",
                "bio": <p>
                    Sabna Sainudeen is a Senior cyber security professional with exceptional skills and experience into mobile, 
                    cloud and IoT security. She is currently associated with Schneider Electric and is responsible for addressing 
                    security of IoT products including Industrial Control Systems and Home automation products. She is an Edison 
                    Expert @ Schneider Electric (Title given to selected senior level experts for their outstanding contribution 
                    in area of expertise).   Sabna is the President of Women in Cybersecurity (WiCyS) India and through leading 
                    this community, she thrives to bid the gender gap that exist in Cybersecurity, with a mission to recruit, 
                    retain, and promote women in cybersecurity in India. Sabna is also a core member of WISE(Women in Schneider 
                    Electric).She is part of various communities and initiatives within and outside her organization.
                </p>,
                "image": require('../../../images/speakers/sabna.JPG'),
            },
        },
    ]

    return <TrainingModuleWrap id="conference-speakers">
        <div className="container-lg p-0">
            {!hideTitle && <h2>Pre-Conference Speakers</h2>}
            <div className="py-4 px-2">
                {PreConfList.map((s) =>
                    <Fade key={s.slug}>
                        <div className="mb-4">
                            <SpeakerCard  {...s} />
                        </div>
                    </Fade>
                )}
            </div>
            {!hideTitle && <h2>Conference Speakers</h2>}
            <div className="py-4 px-2">
                {SpeakersList.map((s) =>
                    <Fade key={s.slug}>
                        <div className="mb-4">
                            <SpeakerCard  {...s} />
                        </div>
                    </Fade>
                )}
            </div>
        </div>
    </TrainingModuleWrap>

};

export default ShaktiSpeakers;
