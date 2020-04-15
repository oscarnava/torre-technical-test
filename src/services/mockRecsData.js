const MOCK_DATA = [
  {
    page: 0,
    total: 66,
    elements: [{
      connections: [{
        relationship: 'lead',
        personSourceId: 'AJyQxdjQ',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: 'nkybg9Nz',
          experienceSource: {
            id: 'evy521NY', category: 'jobs', name: 'Talent Acquisition Agent', organizations: [{ id: 3967, name: 'Bunny Inc.' }],
          },
          experienceTarget: {
            id: 'AMWWqBMn', category: 'projects', name: 'WITs - Women In Technology (Torre Social)', organizations: [{ id: 172333, name: 'Torre' }],
          },
          created: '2018-02-02T14:57:19',
        },
        recommendation: {
          id: 'GxM9WzyQ', duration: 'years', strengths: ['Cultural policy', 'Public Relations - PR', 'Interviewing Skills'], weight: 244.5389, created: '2018-02-02T14:57:55',
        },
      }, {
        relationship: 'work',
        personSourceId: 'AJyQxdjQ',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: '5ny1pKj8',
          experienceSource: {
            id: 'evy521NY', category: 'jobs', name: 'Talent Acquisition Agent', organizations: [{ id: 3967, name: 'Bunny Inc.' }],
          },
          experienceTarget: {
            id: 'kNmZkEM5', category: 'jobs', name: 'UX Researcher and tester', organizations: [{ id: 172333, name: 'Torre' }],
          },
          interactionVerificationId: 'AJyQrnNQ',
          created: '2018-02-02T15:02:45',
        },
        recommendation: {
          id: 'BZNOPLM8', duration: 'years', strengths: ['Game Design', 'Market Research', 'Interviewing Skills'], weight: 151.1334, interactionRecommendationId: 'nkyb69yz', created: '2018-02-02T15:02:49',
        },
      }, {
        relationship: 'work',
        personSourceId: 'YpyoGGy6',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: 'G9MB0Xyg',
          experienceSource: {
            id: 'GxM9JwjQ', category: 'jobs', name: 'Production Manager', organizations: [{ id: 3967, name: 'Bunny Inc.' }],
          },
          experienceTarget: {
            id: '8jpev8yX', category: 'jobs', name: 'QA Logo Bunny', organizations: [{ id: 3967, name: 'Bunny Inc.' }],
          },
          created: '2018-02-02T15:49:57',
        },
        recommendation: {
          id: 'xEM3Prja', duration: 'years', strengths: ['Game Design', 'Graphic Designers', 'Web Design'], weight: 140.3311, created: '2018-02-02T15:50:17',
        },
      }, {
        relationship: 'work',
        personSourceId: 'evy5WvMY',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: '5OMvX2y8',
          experienceSource: {
            id: '0vN8DDNo', category: 'jobs', name: 'Head of Partnerships & Operations', organizations: [{ id: 3967, name: 'Bunny Inc.' }],
          },
          experienceTarget: {
            id: 'AMWWqBMn', category: 'projects', name: 'WITs - Women In Technology (Torre Social)', organizations: [{ id: 172333, name: 'Torre' }],
          },
          created: '2018-02-05T17:12:24',
        },
        recommendation: {
          id: 'X9MEqrMl', duration: 'years', strengths: ['Game Design', 'Market Research', 'Interviewing Skills'], weight: 341.2079, interactionRecommendationId: 'zeynJBya', created: '2018-02-05T17:12:31',
        },
      }, {
        relationship: 'work',
        personSourceId: 'xEM37KMa',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: '5ny1V6N8',
          experienceSource: {
            id: 'ekNmp7y5', category: 'jobs', name: 'Product Manager at Voice123', organizations: [{ id: 172333, name: 'Torre' }],
          },
          experienceTarget: {
            id: 'kNmD7Dy5', category: 'jobs', name: 'UX Researcher', organizations: [{ id: 172333, name: 'Torre' }],
          },
          interactionVerificationId: 'rAMWl0jn',
          created: '2018-02-07T20:38:17',
        },
        recommendation: {
          id: '7XMqppN5', duration: 'years', strengths: ['Interviewing Skills', 'UX Research', 'Market Research'], weight: 242.0906, interactionRecommendationId: 'eGNK8oM5', created: '2018-02-07T20:39:00',
        },
      }, {
        relationship: 'work',
        personSourceId: '7XMq0QN5',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: 'ogyYq7yP',
          experienceSource: {
            id: 'Gpyd1BNP', category: 'jobs', name: 'Senior front-end developer', organizations: [{ id: 172333, name: 'Torre' }],
          },
          experienceTarget: {
            id: 'kNmD7Dy5', category: 'jobs', name: 'UX Researcher', organizations: [{ id: 172333, name: 'Torre' }],
          },
          interactionVerificationId: 'EmjlWmMZ',
          created: '2018-02-07T21:20:11',
        },
        recommendation: {
          id: 'X9MEp6Nl', duration: 'years', strengths: ['Interviewing Skills', 'UX Research', 'Usability Testing'], weight: 197.5545, interactionRecommendationId: 'o8jpZ8NX', created: '2018-02-07T21:20:39',
        },
      }, {
        relationship: 'work',
        personSourceId: '7XMq0QN5',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: 'EmjlmmyZ',
          experienceSource: {
            id: 'Gpyd1BNP', category: 'jobs', name: 'Senior front-end developer', organizations: [{ id: 172333, name: 'Torre' }],
          },
          experienceTarget: {
            id: 'EM3OKBMa', category: 'projects', name: 'Research: Torre Remote', organizations: [{ id: 172333, name: 'Torre' }],
          },
          created: '2018-02-07T21:30:52',
        },
        recommendation: {
          id: '8JMeBgj0', duration: 'years', strengths: ['Market Research', 'Interviewing Skills', 'Usability Testing'], weight: 197.5545, interactionRecommendationId: 'o8jpZ8NX', created: '2018-02-07T21:31:02',
        },
      }, {
        relationship: 'worked',
        personSourceId: 'YpyokGy6',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: 'G0yz6XyE',
          experienceSource: {
            id: 'mjl9pByZ', category: 'projects', name: 'Colombiage Events', organizations: [{ id: 2231, name: 'Colombiage' }],
          },
          experienceTarget: {
            id: '7qNP6XjK', category: 'projects', name: 'Colombiage', organizations: [{ id: 2231, name: 'Colombiage' }],
          },
          created: '2018-02-07T22:27:43',
        },
        recommendation: {
          id: 'evy5DQjY', duration: 'years', strengths: ['Game Design', 'Market Research', 'Interviewing Skills'], weight: 256.0329, created: '2018-02-07T22:28:32',
        },
      }, {
        relationship: 'work',
        personSourceId: '0vN8PNo8',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: '7qNPZrjK',
          experienceSource: {
            id: '5wM7GbMY', category: 'jobs', name: 'UX Researcher, Research', organizations: [{ id: 172333, name: 'Torre' }],
          },
          experienceTarget: {
            id: 'kNmD7Dy5', category: 'jobs', name: 'UX Researcher', organizations: [{ id: 172333, name: 'Torre' }],
          },
          interactionVerificationId: 'G9MBOajg',
          created: '2018-02-07T22:54:14',
        },
        recommendation: {
          id: 'nkybo8Nz', duration: 'years', strengths: ['UX Research', 'Desirability / value testing', 'Interviewing Skills'], weight: 322.2646, interactionRecommendationId: '0vN8deNo', created: '2018-02-07T22:54:39',
        },
      }, {
        relationship: 'worked',
        personSourceId: '35ykvmjQ',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: 'epyJE2jJ',
          experienceSource: {
            id: 'kybkR3Nz', category: 'jobs', name: 'Project Manager', organizations: [{ id: 13564, name: 'GestionTEK ' }],
          },
          experienceTarget: {
            id: 'EM35dbya', category: 'jobs', name: 'Front-end developer -> Deseloper -> QA Manager -> Project Manager', organizations: [{ id: 13564, name: 'GestionTEK ' }],
          },
          interactionVerificationId: 'eLMgkEME',
          created: '2018-07-04T15:01:19',
        },
        recommendation: {
          id: '0Ajr1GMD', duration: 'years', strengths: ['Front-end development', 'Cultural and Creative Industries'], weight: 128.0165, interactionRecommendationId: 'evy58DjY', created: '2018-07-04T15:00:09',
        },
      }, {
        relationship: '',
        personSourceId: '35ykRmjQ',
        personTargetId: 'PbjAmZjX',
        recommendation: {
          id: '0xyXqkNq', duration: 'years', strengths: ['Project Management', 'Project Management', 'Visual Analysis'], weight: 256.0329, highlighted: true, created: '2018-07-05T13:51:27',
        },
      }, {
        relationship: 'worked',
        personSourceId: '37M26AMR',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: 'rAMWx0jn',
          experienceSource: {
            id: '5Vjw9mN4', category: 'jobs', name: 'Tech Lead', organizations: [],
          },
          experienceTarget: {
            id: 'kNmD7Dy5', category: 'jobs', name: 'UX Researcher', organizations: [{ id: 172333, name: 'Torre' }],
          },
          interactionVerificationId: '7XMqWYy5',
          created: '2018-07-07T16:31:22',
        },
        recommendation: {
          id: 'G9MBR9Mg', duration: 'years', strengths: ['UX Research', 'Market Research'], weight: 264.2476, interactionRecommendationId: 'rAMWVzNn', created: '2018-07-07T16:30:59',
        },
      }, {
        relationship: '',
        personSourceId: '7XMq0QN5',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: '8jp9x8yX',
          experienceSource: {
            id: 'Gpyd1BNP', category: 'jobs', name: 'Senior front-end developer', organizations: [{ id: 172333, name: 'Torre' }],
          },
          experienceTarget: {
            id: 'EM3zXeNa', category: 'projects', name: 'Research: Torre DreamTeam', organizations: [{ id: 172333, name: 'Torre' }],
          },
          created: '2018-09-19T17:06:25',
        },
        recommendation: {
          id: 'PbjA1DjX', duration: 'years', strengths: ['Interviewing Skills', 'Market Research', 'UX Research'], weight: 197.5545, interactionRecommendationId: 'o8jpZ8NX', created: '2018-07-09T20:54:50',
        },
      }, {
        relationship: '',
        personSourceId: 'GxM9YOMQ',
        personTargetId: 'PbjAmZjX',
        recommendation: {
          id: 'rAMWB1Nn', duration: 'years', strengths: ['Interviewing Skills', 'Market Research', 'UX Research'], weight: 133.7024, created: '2018-07-10T13:22:16',
        },
      }, {
        relationship: 'teach',
        personSourceId: 'GxM9YOMQ',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: 'xEM3orMa',
          experienceSource: {
            id: 'gyYw17MP', category: 'jobs', name: 'Localization Manager', organizations: [{ id: 172333, name: 'Torre' }],
          },
          experienceTarget: {
            id: 'bjA65DyX', category: 'jobs', name: 'UX Testing Coordinator', organizations: [{ id: 3967, name: 'Bunny Inc.' }],
          },
          interactionVerificationId: 'epyJl2MJ',
          created: '2018-07-10T13:23:15',
        },
        recommendation: {
          id: 'nRyDxvyX', duration: 'years', strengths: ['Interviewing Skills', 'Market Research', 'UX Research'], weight: 216.335, created: '2018-07-10T13:22:28',
        },
      }, {
        relationship: 'interacted',
        personSourceId: 'vy5arDyY',
        personTargetId: 'PbjAmZjX',
        recommendation: {
          id: 'kNm6DbM5', duration: 'minutes', strengths: ['Interviewing Skills', 'Market Research', 'Friendly'], weight: 127.5237, created: '2018-07-20T23:52:16',
        },
      }, {
        relationship: 'work',
        personSourceId: 'GgMRn0M6',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: 'kNmg6Qj5',
          experienceSource: {
            id: 'qNPoDayK', category: 'jobs', name: 'Co-Founder | Chief Growth Officer', organizations: [{ id: 172333, name: 'Torre' }],
          },
          experienceTarget: {
            id: 'kNmD7Dy5', category: 'jobs', name: 'UX Researcher', organizations: [{ id: 172333, name: 'Torre' }],
          },
          interactionVerificationId: 'ekNmd7y5',
          created: '2019-04-24T14:20:15',
        },
        recommendation: {
          id: 'WNVoeVMr', duration: 'years', strengths: ['UX Research', 'Interviewing Skills', 'Discipline'], weight: 147.9618, interactionRecommendationId: 'ogyY72MP', created: '2019-04-24T14:20:08',
        },
      }, {
        relationship: 'work',
        personSourceId: '35ykvmjQ',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: 'JyQG6eMQ',
          experienceSource: {
            id: 'kybkR3Nz', category: 'jobs', name: 'Project Manager', organizations: [{ id: 13564, name: 'GestionTEK ' }],
          },
          experienceTarget: {
            id: 'EM35dbya', category: 'jobs', name: 'Front-end developer -> Deseloper -> QA Manager -> Project Manager', organizations: [{ id: 13564, name: 'GestionTEK ' }],
          },
          interactionVerificationId: 'eLMgkEME',
          created: '2019-08-20T16:02:41',
        },
        recommendation: {
          id: 'gyYBGKNP', duration: 'years', strengths: ['Front-end development', 'Project Management', 'Discipline'], weight: 128.0165, interactionRecommendationId: 'evy58DjY', created: '2019-08-20T16:02:21',
        },
      }, {
        relationship: 'work',
        personSourceId: '0xyXVMqw',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: 'pyd8YpyP',
          experienceSource: {
            id: 'EmjlZENZ', category: 'jobs', name: 'Founding Member and Tech Lead', organizations: [{ id: 172333, name: 'Torre' }],
          },
          experienceTarget: {
            id: '8jpwA8MX', category: 'projects', name: 'Torre', organizations: [{ id: 172333, name: 'Torre' }],
          },
          created: '2019-09-03T01:38:02',
        },
        recommendation: {
          id: 'RyDP2vyX', duration: 'years', strengths: ['Interviewing Skills', 'Usability Testing', 'Desirability / value testing'], weight: 164.6178, created: '2019-09-03T01:38:51',
        },
      }, {
        relationship: 'work',
        personSourceId: '7M2Gg8jR',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: 'Oj6Kogyp',
          experienceSource: {
            id: 'mjlzRBNZ', category: 'jobs', name: 'Country Manager', organizations: [{ id: 172333, name: 'Torre' }],
          },
          experienceTarget: {
            id: '8jpwA8MX', category: 'projects', name: 'Torre', organizations: [{ id: 172333, name: 'Torre' }],
          },
          created: '2019-09-02T22:14:39',
        },
        recommendation: {
          id: 'xyXB9eMq', duration: 'months', strengths: ['UX Research', 'Sketch', 'Qualitative Analysis'], weight: 270.6089, interactionRecommendationId: 'mjlY6DyZ', created: '2019-09-03T22:33:53',
        },
      }],
      people: [{
        id: 'AJyQxdjQ', subjectId: '1046', publicId: 'ivonne', name: 'Ivonne Lorena García', hasEmail: true, professionalHeadline: 'Copywriter, Creative, Photographer & Translator', picture: 'https://starrgate.s3.amazonaws.com:443/users/68b80b35e048f724138c419903353029955bc187/profile_5EatQCv.jpg', pictureThumbnail: 'https://starrgate.s3.amazonaws.com:443/users/68b80b35e048f724138c419903353029955bc187/profile_5EatQCv.jpg', weight: 2449.1425,
      }, {
        id: 'YpyoGGy6', subjectId: '1064', publicId: 'am.serranoariza', name: 'Angela Serrano', hasEmail: true, professionalHeadline: 'Head of Quality and Pro Management at Bunny Inc.', picture: 'https://starrgate.s3.amazonaws.com:443/users/bdec7aefb77f7a1f1aa1f39d6af0482cc114a4a0/profile_VPNQjxu.jpg', pictureThumbnail: 'https://starrgate.s3.amazonaws.com:443/users/bdec7aefb77f7a1f1aa1f39d6af0482cc114a4a0/profile_VPNQjxu.jpg', weight: 3676.5887,
      }, {
        id: 'evy5WvMY', subjectId: '8470', publicId: 'luisamoscoso_', name: 'Luisa Moscoso', hasEmail: true, professionalHeadline: "I'm the CTO of Bunny Studio.", picture: 'https://starrgate.s3.amazonaws.com:443/users/0532e6af180a55dde604ce74584f5a4b5848cdb7/profile_VTVQ1eU.jpg', pictureThumbnail: 'https://starrgate.s3.amazonaws.com:443/CACHE/images/users/0532e6af180a55dde604ce74584f5a4b5848cdb7/profile_VTVQ1eU/491d919a0268f5bdbb7b3c63244f2476.jpg', weight: 2839.8515,
      }, {
        id: 'xEM37KMa', subjectId: '14', publicId: 'daniel', name: 'Daniel Garcia Gonzalez', hasEmail: true, professionalHeadline: 'Product Manager of Voice123', picture: 'https://starrgate.s3.amazonaws.com:443/users/b268ad55a4ec8397e487feeadb93ddbb297f233f/profile_yoEQ4fy.jpg', pictureThumbnail: 'https://starrgate.s3.amazonaws.com:443/users/b268ad55a4ec8397e487feeadb93ddbb297f233f/profile_yoEQ4fy.jpg', weight: 2379.5285,
      }, {
        id: '7XMq0QN5', subjectId: '741', publicId: 'rodrigoherrero', name: 'Rodrigo Herrero', hasEmail: true, professionalHeadline: 'Founder member and Senior front end developer', picture: 'https://starrgate.s3.amazonaws.com:443/users/e45ee28d40518cf72912c59140cbc0b7cc6215f2/profile_veor6Mc.jpg', pictureThumbnail: 'https://starrgate.s3.amazonaws.com:443/CACHE/images/users/e45ee28d40518cf72912c59140cbc0b7cc6215f2/profile_veor6Mc/39b5856ff62fddc1c080b96d3164f699.jpg', weight: 2738.8147,
      }, {
        id: 'YpyokGy6', subjectId: '2280', publicId: 'whitetunafshing', name: 'Sandra Tabares-Duque', hasEmail: true, professionalHeadline: 'Film Producer', picture: 'https://starrgate.s3.amazonaws.com:443/users/4a96205bad36eaba1310d193f4ef0a48df4c78da/profile_Jffanx8.jpg', pictureThumbnail: 'https://starrgate.s3.amazonaws.com:443/users/4a96205bad36eaba1310d193f4ef0a48df4c78da/profile_Jffanx8.jpg', weight: 151.2151,
      }, {
        id: '0vN8PNo8', subjectId: '554', publicId: 'danielaavila', name: 'Daniela Avila Gomez', hasEmail: true, professionalHeadline: 'Product designer at Torre', picture: 'https://starrgate.s3.amazonaws.com:443/users/decd68d0880f7bedbd9b4224bda1d77cda7f7cb9/profile_da9Ljb0.jpg', pictureThumbnail: 'https://starrgate.s3.amazonaws.com:443/CACHE/images/users/decd68d0880f7bedbd9b4224bda1d77cda7f7cb9/profile_da9Ljb0/c47d9f1b673c96814ab051d34e0b9280.jpg', weight: 9448.379,
      }, {
        id: '35ykvmjQ', subjectId: '914', publicId: 'mariaalejandragarciarojas-1', name: 'María Alejandra García Rojas', hasEmail: true, professionalHeadline: 'Passionate Program Manager', picture: 'https://starrgate.s3.amazonaws.com:443/users/4d24749b7539395b3519260914e6f7e62e309798/profile_GQdSTcc.jpg', pictureThumbnail: 'https://starrgate.s3.amazonaws.com:443/users/4d24749b7539395b3519260914e6f7e62e309798/profile_GQdSTcc.jpg', weight: 151.2151,
      }, {
        id: '35ykRmjQ', subjectId: '915', publicId: 'juliahelenadiaz', name: 'Julia Helena Diaz', hasEmail: true, professionalHeadline: 'Having fun with digital platforms. Love languages, Ed tech, audiobooks.', picture: 'https://starrgate.s3.amazonaws.com:443/users/c3d9ff88fd49bd024da8e65b419ab9962413f7a5/profile_oHrNOy8.jpg', pictureThumbnail: 'https://starrgate.s3.amazonaws.com:443/users/c3d9ff88fd49bd024da8e65b419ab9962413f7a5/profile_oHrNOy8.jpg', weight: 151.2151,
      }, {
        id: '37M26AMR', subjectId: '47', publicId: 'davidmontano', name: 'David Montaño Ramírez', hasEmail: true, professionalHeadline: 'Software engineer', picture: 'https://starrgate.s3.amazonaws.com:443/users/eebe14c37144754a5427f7548771387ed6a70217/profile_QPQvirw.jpg', pictureThumbnail: 'https://starrgate.s3.amazonaws.com:443/CACHE/images/users/eebe14c37144754a5427f7548771387ed6a70217/profile_QPQvirw/3d871965e84d1dd4862b7c82b379fcfc.jpg', weight: 2092.2343,
      }, {
        id: 'GxM9YOMQ', subjectId: '1241', publicId: 'melahbi', name: 'Melanie Helmrich', hasEmail: true, professionalHeadline: '(Localization Manager | Customer Service | Interior Designer)', picture: 'https://starrgate.s3.amazonaws.com:443/users/8b80e1950bb27d02355294c80b24611cdc147038/profile_dS0pNmB.jpg', pictureThumbnail: 'https://starrgate.s3.amazonaws.com:443/users/8b80e1950bb27d02355294c80b24611cdc147038/profile_dS0pNmB.jpg', weight: 917.6,
      }, {
        id: 'vy5arDyY', subjectId: '8511', publicId: 'pippavosvoice', name: 'Pippa Vos', hasEmail: true, professionalHeadline: 'Voice Talent - Eng US and CA and PT -BR - I help companies, producers and audio engineers humanize products and boost sales!Which products are you promoting?', picture: 'https://starrgate.s3.amazonaws.com:443/users/355aae8a10b044138dc1aea5c92bc2ebdba11204/profile_K8X8IUL.jpg', pictureThumbnail: 'https://starrgate.s3.amazonaws.com:443/users/355aae8a10b044138dc1aea5c92bc2ebdba11204/profile_K8X8IUL.jpg', weight: 0.0279,
      }, {
        id: 'GgMRn0M6', subjectId: '2654', publicId: 'ac', name: 'Andrés Cajiao', hasEmail: true, professionalHeadline: 'Co-Founder and Chief Growth Officer at torre', picture: 'https://starrgate.s3.amazonaws.com:443/users/2c831e5c23c01d1f4c65b086784bc453e4985526/profile_wSB2AwN.jpg', pictureThumbnail: 'https://starrgate.s3.amazonaws.com:443/CACHE/images/users/2c831e5c23c01d1f4c65b086784bc453e4985526/profile_wSB2AwN/268733757b42d687b772d5d35222402c.jpg', weight: 2156.5174,
      }, {
        id: '0xyXVMqw', subjectId: '37', publicId: 'manolo', name: 'Manuel Montes', hasEmail: true, professionalHeadline: 'Founding member and Tech Lead of Torre', picture: 'https://starrgate.s3.amazonaws.com:443/users/97875998db0346c35fc3fd815df4802e99157dae/profile_h5u4pFr.jpg', pictureThumbnail: 'https://starrgate.s3.amazonaws.com:443/CACHE/images/users/97875998db0346c35fc3fd815df4802e99157dae/profile_h5u4pFr/7a2f816471f0439e87f3c691df235ed3.jpg', weight: 1870.0915,
      }, {
        id: '7M2Gg8jR', subjectId: '11836', publicId: 'sebasgallo', name: 'Sebastian Gallo', hasEmail: true, professionalHeadline: 'Making work fulfilling @ Torre', picture: 'https://starrgate.s3.amazonaws.com:443/users/c122e4a2afb29d4f02167e9ab764151161de619d/profile_4vEtI04.jpg', pictureThumbnail: 'https://starrgate.s3.amazonaws.com:443/users/c122e4a2afb29d4f02167e9ab764151161de619d/profile_4vEtI04.jpg', weight: 1150.4184,
      }, {
        id: 'PbjAmZjX', subjectId: '35', publicId: 'ana-maria-diaz', name: 'Ana Maria Diaz', hasEmail: true, professionalHeadline: 'UX Researcher/Designer - MSc. Software Engineer - MA Cultural & Creative Industries', picture: 'https://starrgate.s3.amazonaws.com:443/users/80cd635dbd1dcbb28e9dbc05078d2a8050752a35/profile_DcWxCCy.jpg', pictureThumbnail: 'https://starrgate.s3.amazonaws.com:443/users/80cd635dbd1dcbb28e9dbc05078d2a8050752a35/profile_DcWxCCy.jpg', weight: 6114.3723,
      }],
    }],
  },

  {
    page: 1,
    total: 66,
    elements: [{
      connections: [{
        relationship: 'employ',
        personSourceId: 'Gpydz3MP',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: 'G0yzanjE',
          experienceSource: {
            id: 'RyDpvzyX', category: 'projects', name: 'Torre Remote', organizations: [{ id: 172333, name: 'Torre' }],
          },
          experienceTarget: {
            id: 'EM3OKBMa', category: 'projects', name: 'Research: Torre Remote', organizations: [{ id: 172333, name: 'Torre' }],
          },
          interactionVerificationId: '0vN8zGjo',
          created: '2018-02-02T13:51:12',
        },
        recommendation: {
          id: 'gKNxKryE', duration: 'months', strengths: ['UX Research'], weight: 65.0853, interactionRecommendationId: 'zqy0gKjg', created: '2018-02-02T13:51:54',
        },
      }, {
        relationship: 'work',
        personSourceId: 'nkybekjz',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: 'evy5YbyY',
          experienceSource: {
            id: 'evy57DMY', category: 'jobs', name: 'Backend Developer @ Bunny Inc.', organizations: [{ id: 172333, name: 'Torre' }],
          },
          experienceTarget: {
            id: 'kNmZkEM5', category: 'jobs', name: 'UX Researcher and tester', organizations: [{ id: 172333, name: 'Torre' }],
          },
          interactionVerificationId: 'nRyDPOyX',
          created: '2018-02-02T14:27:42',
        },
        recommendation: {
          id: 'zeynwoNa', duration: 'months', strengths: ['Interviewing Skills', 'Desirability / value testing', 'Usability Testing'], weight: 99.8032, interactionRecommendationId: '5wM79xyY', created: '2018-02-02T14:27:46',
        },
      }, {
        relationship: 'work',
        personSourceId: 'oWNVJ1Nr',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: '0AjrE0MD',
          experienceSource: {
            id: 'eyn3EbNa', category: 'jobs', name: 'Digital Marketer', organizations: [{ id: 3967, name: 'Bunny Inc.' }, { id: 172333, name: 'Torre' }],
          },
          experienceTarget: {
            id: 'bjA65DyX', category: 'jobs', name: 'UX Testing Coordinator', organizations: [{ id: 3967, name: 'Bunny Inc.' }],
          },
          interactionVerificationId: '37M2v2MR',
          created: '2018-02-02T14:53:09',
        },
        recommendation: {
          id: 'G9MBnXMg', duration: 'months', strengths: ['Game Design', 'Market Research', 'Interviewing Skills'], weight: 63.6431, interactionRecommendationId: '5ny1gKM8', created: '2018-02-02T14:53:12',
        },
      }, {
        relationship: 'employ',
        personSourceId: 'Gpydz3MP',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: 'GxM9XzNQ',
          experienceSource: {
            id: 'X9MEm4Ml', category: 'jobs', name: 'Co-founder and CEO', organizations: [{ id: 157408, name: 'Bunny Studio' }],
          },
          experienceTarget: {
            id: 'EM3zXeNa', category: 'projects', name: 'Research: Torre DreamTeam', organizations: [{ id: 172333, name: 'Torre' }],
          },
          created: '2018-02-02T15:59:45',
        },
        recommendation: {
          id: 'ekNm0Qy5', duration: 'months', strengths: ['Market Research', 'Interviewing Skills', 'UX Research'], weight: 65.0853, created: '2018-02-02T15:59:54',
        },
      }, {
        relationship: 'work',
        personSourceId: '7qNPmOMK',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: 'GpydZYMP',
          experienceSource: {
            id: 'KNx40bNE', category: 'projects', name: 'Donor', organizations: [{ id: 172333, name: 'Torre' }],
          },
          experienceTarget: {
            id: 'qNPYZrMK', category: 'projects', name: 'DONOR - Blood donation awareness and promotion (Torre Social)', organizations: [{ id: 172333, name: 'Torre' }],
          },
          created: '2018-02-02T17:10:21',
        },
        recommendation: {
          id: 'o8jpVwNX', duration: 'months', strengths: ['Game Design', 'Market Research', 'Interviewing Skills'], weight: 48.2778, interactionRecommendationId: '7XMqQ8M5', created: '2018-02-02T17:10:40',
        },
      }, {
        relationship: 'work',
        personSourceId: 'GgMRA8N6',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: '5OMvaxN8',
          experienceSource: {
            id: 'nM4G8WN7', category: 'projects', name: 'Donor', organizations: [{ id: 101825, name: 'Donor' }, { id: 172333, name: 'Torre' }],
          },
          experienceTarget: {
            id: 'qNPYZrMK', category: 'projects', name: 'DONOR - Blood donation awareness and promotion (Torre Social)', organizations: [{ id: 172333, name: 'Torre' }],
          },
          created: '2018-02-02T18:00:47',
        },
        recommendation: {
          id: 'G0yzanjE', duration: 'years', strengths: ['Market Research', 'Interviewing Skills', 'Usability Testing'], weight: 58.5284, created: '2018-02-02T18:01:11',
        },
      }, {
        relationship: 'work',
        personSourceId: '5OMvbmM8',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: '5zNG1njx',
          experienceSource: {
            id: 'ANalp8yn', category: 'jobs', name: 'Senior Recruiter ', organizations: [{ id: 172333, name: 'Torre' }],
          },
          experienceTarget: {
            id: 'kNmD7Dy5', category: 'jobs', name: 'UX Researcher', organizations: [{ id: 172333, name: 'Torre' }],
          },
          created: '2018-02-08T11:56:08',
        },
        recommendation: {
          id: 'zqy0qlNg', duration: 'months', strengths: ['Game Design', 'Market Research', 'Interviewing Skills'], weight: 110.3844, created: '2018-02-08T11:56:11',
        },
      }, {
        relationship: 'work',
        personSourceId: 'zeyn0PMa',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: '5Vjwn4M4',
          experienceSource: {
            id: 'kNmZqBM5', category: 'jobs', name: 'Production Manager', organizations: [{ id: 172333, name: 'Torre' }],
          },
          experienceTarget: {
            id: 'kNmD7Dy5', category: 'jobs', name: 'UX Researcher', organizations: [{ id: 172333, name: 'Torre' }],
          },
          interactionVerificationId: 'zqy0kljg',
          created: '2018-02-08T13:37:35',
        },
        recommendation: {
          id: 'lnM48WM7', duration: 'months', strengths: ['Game Design', 'Market Research', 'Interviewing Skills'], weight: 81.3593, interactionRecommendationId: '5VjwY4N4', created: '2018-02-08T13:37:39',
        },
      }, {
        relationship: 'work',
        personSourceId: '8JMeXeN0',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: 'zeynznya',
          experienceSource: {
            id: 'mjlErByZ', category: 'jobs', name: 'Editor & Quality Control Agent', organizations: [{ id: 3967, name: 'Bunny Inc.' }, { id: 3967, name: 'Bunny Inc.' }, { id: 3967, name: 'Bunny Inc.' }, { id: 172333, name: 'Torre' }],
          },
          experienceTarget: {
            id: 'kNmD7Dy5', category: 'jobs', name: 'UX Researcher', organizations: [{ id: 172333, name: 'Torre' }],
          },
          created: '2018-02-08T14:37:35',
        },
        recommendation: {
          id: 'G9MB89yg', duration: 'years', strengths: ['Game Design', 'Market Research', 'Interviewing Skills'], weight: 87.3711, created: '2018-02-08T14:37:43',
        },
      }, {
        relationship: 'lead',
        personSourceId: '0vN8dGNo',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: '5ny1dOj8',
          experienceSource: {
            id: 'RyDXJlyX', category: 'projects', name: 'Usability test', organizations: [{ id: 172333, name: 'Torre' }],
          },
          experienceTarget: {
            id: 'kNmD7Dy5', category: 'jobs', name: 'UX Researcher', organizations: [{ id: 172333, name: 'Torre' }],
          },
          created: '2018-06-05T19:43:43',
        },
        recommendation: {
          id: '5OMv3Oj8', duration: 'years', strengths: ['Interviewing Skills', 'Market Research'], weight: 114.5014, interactionRecommendationId: 'o8jp5myX', created: '2018-06-05T19:42:10',
        },
      }, {
        relationship: 'worked',
        personSourceId: '0vN8dGNo',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: 'YpyooGy6',
          experienceSource: {
            id: 'zNGo8XNx', category: 'projects', name: 'Coral Arsis', organizations: [],
          },
          experienceTarget: {
            id: 'JMelXrN0', category: 'projects', name: 'Coral Arsis', organizations: [],
          },
          created: '2018-06-05T19:54:18',
        },
        recommendation: {
          id: '7XMqapM5', duration: 'years', strengths: ['Singing'], weight: 70.7658, interactionRecommendationId: 'o8jp5myX', created: '2018-06-05T19:44:48',
        },
      }, {
        relationship: 'worked',
        personSourceId: '0vN8dGNo',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: 'GgMRp8y6',
          experienceSource: {
            id: 'qNPoKXyK', category: 'projects', name: 'University of Los Andes Choir at Universidad de Los Andes', organizations: [{ id: 175056, name: 'Universidad de los andes' }],
          },
          experienceTarget: {
            id: 'JMezbej0', category: 'projects', name: 'University of Los Andes Choir', organizations: [{ id: 175056, name: 'Universidad de los andes' }],
          },
          created: '2018-06-05T19:47:54',
        },
        recommendation: {
          id: 'epyJloMJ', duration: 'years', strengths: ['Singing', 'Soprano'], weight: 70.7658, interactionRecommendationId: 'o8jp5myX', created: '2018-06-05T19:45:50',
        },
      }, {
        relationship: 'lead',
        personSourceId: '7M26V8MR',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: '5wM7AxyY',
          experienceSource: {
            id: '7M28b1yR', category: 'jobs', name: 'Research and Data Entry Specialist', organizations: [{ id: 172333, name: 'Torre' }],
          },
          experienceTarget: {
            id: 'kNmD7Dy5', category: 'jobs', name: 'UX Researcher', organizations: [{ id: 172333, name: 'Torre' }],
          },
          interactionVerificationId: 'EmjloaMZ',
          created: '2018-07-04T23:27:21',
        },
        recommendation: {
          id: 'Emjl65NZ', duration: 'months', strengths: ['Interviewing Skills', 'Market Research'], weight: 53.4645, interactionRecommendationId: 'o8jpr8NX', created: '2018-07-04T23:26:45',
        },
      }, {
        relationship: '',
        personSourceId: 'bjAW4YNX',
        personTargetId: 'PbjAmZjX',
        recommendation: {
          id: 'X9MEVnjl', duration: 'years', strengths: ['Web Design', 'Development', 'Team Building'], weight: 117.8165, interactionRecommendationId: 'YOj6kPyp', created: '2018-07-06T05:45:55',
        },
      }, {
        relationship: 'work',
        personSourceId: 'kyb092Mz',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: 'YpyoYwM6',
          experienceSource: {
            id: 'vN8PmGNo', category: 'jobs', name: 'Software Engineer', organizations: [{ id: 172333, name: 'Torre' }],
          },
          created: '2018-07-19T01:51:36',
        },
        recommendation: {
          id: 'JyQewWyQ', duration: 'months', strengths: ['UX Research', 'Usability Testing', 'Friendly'], weight: 61.747, created: '2018-07-19T01:51:29',
        },
      }, {
        relationship: 'work',
        personSourceId: 'BMLnOoyD',
        personTargetId: 'PbjAmZjX',
        recommendation: {
          id: 'pydzpPMP', duration: 'months', strengths: ['Market Research'], weight: 127.5, interactionRecommendationId: '8yZmeLjB', created: '2018-07-20T23:35:22',
        },
      }, {
        relationship: 'work',
        personSourceId: '5OMvgj8J',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: 'RyDKQ8jX',
          experienceSource: {
            id: '5zNGvyxw', category: 'jobs', name: 'Senior Front-end Developer', organizations: [{ id: 172333, name: 'Torre' }],
          },
          experienceTarget: {
            id: 'kNmD7Dy5', category: 'jobs', name: 'UX Researcher', organizations: [{ id: 172333, name: 'Torre' }],
          },
          interactionVerificationId: 'Vjwg3rj4',
          created: '2018-09-04T13:09:32',
        },
        recommendation: {
          id: 'BMLzEXyD', duration: 'years', strengths: ['Interviewing Skills', 'Market Research', 'UX Research'], weight: 124.287, interactionRecommendationId: '8jp9q7yX', created: '2018-09-04T13:09:26',
        },
      }, {
        relationship: 'employ',
        personSourceId: 'Gpydz3MP',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: '0yzr2ayE',
          experienceSource: {
            id: 'ny19n6y8', category: 'jobs', name: 'Founder and CEO', organizations: [{ id: 172333, name: 'Torre' }],
          },
          experienceTarget: {
            id: 'EM3zXeNa', category: 'projects', name: 'Research: Torre DreamTeam', organizations: [{ id: 172333, name: 'Torre' }],
          },
          created: '2018-09-23T00:35:54',
        },
        recommendation: {
          id: 'JMezzQj0', duration: 'months', strengths: ['Interviewing Skills', 'Market Research'], weight: 65.0853, created: '2018-09-23T00:36:11',
        },
      }, {
        relationship: 'work',
        personSourceId: 'kyb092Mz',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: '5ykBm6jQ',
          experienceSource: {
            id: 'vN8PmGNo', category: 'jobs', name: 'Software Engineer', organizations: [{ id: 172333, name: 'Torre' }],
          },
          experienceTarget: {
            id: '8jpwA8MX', category: 'projects', name: 'Torre', organizations: [{ id: 172333, name: 'Torre' }],
          },
          created: '2019-09-03T19:13:45',
        },
        recommendation: {
          id: 'KNxlJkNE', duration: 'months', strengths: ['Interviewing Skills', 'Communication', 'UX Research'], weight: 61.747, created: '2019-09-03T19:15:22',
        },
      }, {
        relationship: 'work',
        personSourceId: 'gyYaddyP',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: 'RyDOowjX',
          experienceSource: {
            id: '9MBDadAy', category: 'projects', name: 'Rose Global Web App', organizations: [{ id: 67542, name: 'Rose Global' }],
          },
          experienceTarget: {
            id: 'gMRY0d0N', category: 'jobs', name: 'Product Designer (Freelance project)', organizations: [{ id: 67542, name: 'Rose Global' }],
          },
          created: '2019-11-21T16:19:46',
        },
        recommendation: {
          id: 'KNxOLbyE', duration: 'weeks', strengths: ['UI Design', 'UX Design', 'Product Requirements'], weight: 127.5, created: '2019-11-21T16:20:53',
        },
      }],
      people: [{
        id: 'Gpydz3MP', subjectId: '13', publicId: 'torrenegra', name: 'Alexander Torrenegra', hasEmail: true, professionalHeadline: 'CEO of Torre. Founder of Tribe, Bunny Studio, Voice123, and Torrenegra Accelerate. Author of Remoter. \uD83E\uDD88 in Shark Tank. Hiring entrepreneurs.', picture: 'https://starrgate.s3.amazonaws.com:443/users/12337548ee85eeb37ad312a9645b881a8aa24325/profile_1ea6Eh7.jpg', pictureThumbnail: 'https://starrgate.s3.amazonaws.com:443/CACHE/images/users/12337548ee85eeb37ad312a9645b881a8aa24325/profile_1ea6Eh7/037625ed1c24f4a6ff53e23928f4b8fa.jpg', weight: 19475.836,
      }, {
        id: 'nkybekjz', subjectId: '1110', publicId: 'unmultimedio', name: 'Julian R Figueroa', hasEmail: true, professionalHeadline: 'Entrepreneur, Software Developer, Bike Lover.', picture: 'https://starrgate.s3.amazonaws.com:443/users/3c9904ff793024d0fbce75fc4ca9b48f944dc441/profile_DFNpRrW.jpg', pictureThumbnail: 'https://starrgate.s3.amazonaws.com:443/users/3c9904ff793024d0fbce75fc4ca9b48f944dc441/profile_DFNpRrW.jpg', weight: 934.4578,
      }, {
        id: 'oWNVJ1Nr', subjectId: '1066', publicId: 'lauravaron', name: 'Laura Varón', hasEmail: true, professionalHeadline: 'Writer, translator, marketer and some hats in between.', picture: 'https://starrgate.s3.amazonaws.com:443/users/d79a9c7b173c88bb61405b11909cf602da9fef11/profile_iPafkQg.jpg', pictureThumbnail: 'https://starrgate.s3.amazonaws.com:443/users/d79a9c7b173c88bb61405b11909cf602da9fef11/profile_iPafkQg.jpg', weight: 1252.8473,
      }, {
        id: '7qNPmOMK', subjectId: '1109', publicId: 'lauraesteban', name: 'Laura Esteban', hasEmail: true, professionalHeadline: 'Service Designer', picture: 'https://starrgate.s3.amazonaws.com:443/users/16da19fcaa3f625c89af589e7cd4af1068068570/profile_qPWUrO5.jpg', pictureThumbnail: 'https://starrgate.s3.amazonaws.com:443/users/16da19fcaa3f625c89af589e7cd4af1068068570/profile_qPWUrO5.jpg', weight: 1287.2072,
      }, {
        id: 'GgMRA8N6', subjectId: '947', publicId: 'juancamilocardona', name: 'Juan Camilo Cardona', hasEmail: true, professionalHeadline: 'Recruitment Marketer at Torre', picture: 'https://starrgate.s3.amazonaws.com:443/users/2cdda8f99432755e26afea9bd296c8cd71402519/profile_TGryZUS.jpg', pictureThumbnail: 'https://starrgate.s3.amazonaws.com:443/users/2cdda8f99432755e26afea9bd296c8cd71402519/profile_TGryZUS.jpg', weight: 35.9291,
      }, {
        id: '5OMvbmM8', subjectId: '1255', publicId: 'ayschmidt', name: 'Ayslan Schmidt', hasEmail: true, professionalHeadline: '("passionate sourcer" | "geek girl" | "tech recruiter") AND "Gaúcha" AND ("half-cat" |  "MasterChef beginner")', picture: 'https://starrgate.s3.amazonaws.com:443/users/47b87e866975657650daf93182f97a0d3327f971/profile_2iWIIZs.jpg', pictureThumbnail: 'https://starrgate.s3.amazonaws.com:443/users/47b87e866975657650daf93182f97a0d3327f971/profile_2iWIIZs.jpg', weight: 1488.6284,
      }, {
        id: 'zeyn0PMa', subjectId: '1835', publicId: 'lana', name: 'Lana Abdallah', hasEmail: true, professionalHeadline: 'Production Manager', picture: 'https://starrgate.s3.amazonaws.com:443/users/d83cfb4ea86f7b9fae7d4255739a328edaf01282/profile_nAfKRee.jpg', pictureThumbnail: 'https://starrgate.s3.amazonaws.com:443/users/d83cfb4ea86f7b9fae7d4255739a328edaf01282/profile_nAfKRee.jpg', weight: 615.7344,
      }, {
        id: '8JMeXeN0', subjectId: '1188', publicId: 'carelfc', name: 'Carel Frans Cronje', hasEmail: true, professionalHeadline: 'Content Creator & Editor: Voice123', picture: 'https://starrgate.s3.amazonaws.com:443/users/379a8c8e62d36314972edb5e4b318827ead97649/profile_iudfiSr.jpg', pictureThumbnail: 'https://starrgate.s3.amazonaws.com:443/users/379a8c8e62d36314972edb5e4b318827ead97649/profile_iudfiSr.jpg', weight: 420.7506,
      }, {
        id: '0vN8dGNo', subjectId: '2484', publicId: 'AngelaCruz', name: 'Angela Cruz', hasEmail: true, professionalHeadline: 'Data Driven Operations Manager: Service Delivery, Customer Success/Service, Sales and Marketing.', picture: 'https://starrgate.s3.amazonaws.com:443/users/c56b46080cc5c35882a5781941678ad6d133421d/profile_a3Zv20S.jpg', pictureThumbnail: 'https://starrgate.s3.amazonaws.com:443/users/c56b46080cc5c35882a5781941678ad6d133421d/profile_a3Zv20S.jpg', weight: 151.2151,
      }, {
        id: '7M26V8MR', subjectId: '2185', publicId: 'avaorense', name: 'Ava Ritz Princess Orense', hasEmail: true, professionalHeadline: 'Professional', picture: 'https://starrgate.s3.amazonaws.com:443/users/574e5991d6972a4379f7e377984bdba92f4009da/profile_ZuMOott.jpg', pictureThumbnail: 'https://starrgate.s3.amazonaws.com:443/users/574e5991d6972a4379f7e377984bdba92f4009da/profile_ZuMOott.jpg', weight: 1241.7935,
      }, {
        id: 'bjAW4YNX', subjectId: '920', publicId: 'consuelocacereslozano', name: 'Consuelo Cáceres Lozano', hasEmail: true, professionalHeadline: 'Systems engineer', weight: 0,
      }, {
        id: 'kyb092Mz', subjectId: '5070', publicId: 'luismesa', name: 'Luis Andres Mesa Fajardo', hasEmail: true, professionalHeadline: 'Senior Software Engineer at Torre', picture: 'https://starrgate.s3.amazonaws.com:443/users/4037ecee8f3abf7429bde31ddcccbb67c88eae9c/profile_uDjBpJg.jpg', pictureThumbnail: 'https://starrgate.s3.amazonaws.com:443/CACHE/images/users/4037ecee8f3abf7429bde31ddcccbb67c88eae9c/profile_uDjBpJg/cdbd45d0deb90f9b839a6e22c3d4acd7.jpg', weight: 2176.1033,
      }, {
        id: 'BMLnOoyD', subjectId: '8510', publicId: 'timborubio', name: 'Tim Barrett', hasEmail: true, professionalHeadline: 'Engineer at heart', picture: 'https://starrgate.s3.amazonaws.com:443/users/1c07434e3c452cbad39966f3dfb4735af669ec09/profile_CiJ3dn6.jpg', pictureThumbnail: 'https://starrgate.s3.amazonaws.com:443/users/1c07434e3c452cbad39966f3dfb4735af669ec09/profile_CiJ3dn6.jpg', weight: 0,
      }, {
        id: '5OMvgj8J', subjectId: '60', publicId: 'davidcamargo', name: 'David Camargo', hasEmail: true, professionalHeadline: 'VP of Engineering@InstaLeap, Product & Engineering Mentor@Founder Institute Bogotá', picture: 'https://starrgate.s3.amazonaws.com:443/users/3e1aaf23666c1e4be4236ebc3124c67bac892235/profile_6BFTSOZ.jpg', pictureThumbnail: 'https://starrgate.s3.amazonaws.com:443/users/3e1aaf23666c1e4be4236ebc3124c67bac892235/profile_6BFTSOZ.jpg', weight: 1159.1171,
      }, {
        id: 'gyYaddyP', subjectId: '28572', publicId: 'juampirossetti', name: 'Juampi Rossetti', hasEmail: true, professionalHeadline: 'Fullstack developer', picture: 'https://starrgate.s3.amazonaws.com:443/users/948fa00daf3e8990445588ad629dced25429b19a/profile_JkQCW4C.jpg', pictureThumbnail: 'https://starrgate.s3.amazonaws.com:443/users/948fa00daf3e8990445588ad629dced25429b19a/profile_JkQCW4C.jpg', weight: 0,
      }, {
        id: 'PbjAmZjX', subjectId: '35', publicId: 'ana-maria-diaz', name: 'Ana Maria Diaz', hasEmail: true, professionalHeadline: 'UX Researcher/Designer - MSc. Software Engineer - MA Cultural & Creative Industries', picture: 'https://starrgate.s3.amazonaws.com:443/users/80cd635dbd1dcbb28e9dbc05078d2a8050752a35/profile_DcWxCCy.jpg', pictureThumbnail: 'https://starrgate.s3.amazonaws.com:443/users/80cd635dbd1dcbb28e9dbc05078d2a8050752a35/profile_DcWxCCy.jpg', weight: 6114.3723,
      }],
    }],
  },

  {
    page: 2,
    total: 66,
    elements: [{
      connections: [{
        relationship: 'employ',
        personSourceId: '0xyXVMqw',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: 'zeynboya',
          experienceSource: {
            id: 'EmjlZENZ', category: 'jobs', name: 'Founding Member and Tech Lead', organizations: [{ id: 172333, name: 'Torre' }],
          },
          experienceTarget: {
            id: '0yzn6XyE', category: 'projects', name: 'Torre Hackaton 2017', organizations: [{ id: 172333, name: 'Torre' }],
          },
          created: '2018-02-02T15:10:42',
        },
        recommendation: {
          id: 'GpydOYjP', duration: 'days', strengths: ['Game Design', 'Graphic Designers', 'Drawing'], weight: 0.451, created: '2018-02-02T15:11:24',
        },
      }, {
        relationship: 'work',
        personSourceId: 'GxM9YOMQ',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: 'Ypyo8dN6',
          experienceSource: {
            id: 'RyDpAzyX', category: 'jobs', name: 'Production Manager', organizations: [{ id: 3967, name: 'Bunny Inc.' }],
          },
          experienceTarget: {
            id: '8jpev8yX', category: 'jobs', name: 'QA Logo Bunny', organizations: [{ id: 3967, name: 'Bunny Inc.' }],
          },
          created: '2018-02-02T15:10:03',
        },
        recommendation: {
          id: '35yk0mNQ', duration: 'months', strengths: ['Game Design', 'Market Research', 'Interviewing Skills'], weight: 10.9892, created: '2018-02-02T15:12:20',
        },
      }, {
        relationship: 'employ',
        personSourceId: 'evy5WvMY',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: 'PbjAkwNX',
          experienceSource: {
            id: '0vN8DDNo', category: 'jobs', name: 'Head of Partnerships & Operations', organizations: [{ id: 3967, name: 'Bunny Inc.' }],
          },
          experienceTarget: {
            id: '8jpev8yX', category: 'jobs', name: 'QA Logo Bunny', organizations: [{ id: 3967, name: 'Bunny Inc.' }],
          },
          created: '2018-02-05T17:05:56',
        },
        recommendation: {
          id: '5wM7e3yY', duration: 'months', strengths: ['Game Design', 'Market Research', 'Interviewing Skills'], weight: 28.0445, interactionRecommendationId: 'zeynJBya', created: '2018-02-05T17:06:15',
        },
      }, {
        relationship: 'employ',
        personSourceId: 'evy5WvMY',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: 'o8jpAxyX',
          experienceSource: {
            id: '0vN8DDNo', category: 'jobs', name: 'Head of Partnerships & Operations', organizations: [{ id: 3967, name: 'Bunny Inc.' }],
          },
          experienceTarget: {
            id: 'bjA65DyX', category: 'jobs', name: 'UX Testing Coordinator', organizations: [{ id: 3967, name: 'Bunny Inc.' }],
          },
          interactionVerificationId: '7qNP2AjK',
          created: '2018-02-05T17:11:27',
        },
        recommendation: {
          id: '5VjwO1j4', duration: 'months', strengths: ['Game Design', 'Market Research', 'Interviewing Skills'], weight: 28.0445, interactionRecommendationId: 'zeynJBya', created: '2018-02-05T17:11:33',
        },
      }, {
        relationship: 'work',
        personSourceId: 'GgMRn0M6',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: '8JMedeN0',
          experienceSource: {
            id: 'qNPoDayK', category: 'jobs', name: 'Co-Founder | Chief Growth Officer', organizations: [{ id: 172333, name: 'Torre' }],
          },
          experienceTarget: {
            id: 'EM3OKBMa', category: 'projects', name: 'Research: Torre Remote', organizations: [{ id: 172333, name: 'Torre' }],
          },
          created: '2018-05-24T19:13:41',
        },
        recommendation: {
          id: 'zqy0oKjg', duration: 'months', strengths: ['UX Research', 'Usability Testing', 'Desirability / value testing'], weight: 12.1612, created: '2018-05-24T19:13:03',
        },
      }, {
        relationship: 'work',
        personSourceId: 'WNVYdKyr',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: 'BZNOmrj8',
          experienceSource: {
            id: 'VjwOL4j4', category: 'jobs', name: 'Operations Coordinator', organizations: [{ id: 172333, name: 'Torre' }],
          },
          experienceTarget: {
            id: 'kNmD7Dy5', category: 'jobs', name: 'UX Researcher', organizations: [{ id: 172333, name: 'Torre' }],
          },
          interactionVerificationId: 'GxM9RWjQ',
          created: '2018-06-05T23:33:55',
        },
        recommendation: {
          id: 'rAMWAKyn', duration: 'months', strengths: ['UX Research', 'Project Management'], weight: 15.2189, interactionRecommendationId: 'G0yzpgME', created: '2018-06-05T23:34:34',
        },
      }, {
        relationship: '',
        personSourceId: 'bjAW4YNX',
        personTargetId: 'PbjAmZjX',
        recommendation: {
          id: 'lnM4KWN7', duration: 'months', strengths: ['Project Management', 'Infrastructure'], weight: 9.6835, interactionRecommendationId: 'YOj6kPyp', created: '2018-07-06T05:50:18',
        },
      }, {
        relationship: 'interacted',
        personSourceId: 'OMv9D9N8',
        personTargetId: 'PbjAmZjX',
        recommendation: {
          id: '8jp9e0yX', duration: 'hours', strengths: ['UX Research', 'Market Research', 'Interviewing Skills'], weight: 0.0073, interactionRecommendationId: 'ZNO4YmM8', created: '2018-07-26T12:01:36',
        },
      }, {
        relationship: 'lead',
        personSourceId: 'qy0lPdyg',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: 'JMelvDN0',
          experienceSource: {
            id: 'kNmkB7j5', category: 'jobs', name: 'Data Entry and Research Specialist', organizations: [{ id: 172333, name: 'Torre' }],
          },
          experienceTarget: {
            id: 'kNmD7Dy5', category: 'jobs', name: 'UX Researcher', organizations: [{ id: 172333, name: 'Torre' }],
          },
          interactionVerificationId: '0vN82Qjo',
          created: '2018-08-01T23:35:23',
        },
        recommendation: {
          id: '5ykra8jQ', duration: 'months', strengths: ['Leadership'], weight: 11.7283, interactionRecommendationId: 'WNVYz1yr', created: '2018-08-01T23:34:48',
        },
      }, {
        relationship: 'lead',
        personSourceId: 'qy0lPdyg',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: 'vy5QOWyY',
          experienceSource: {
            id: 'pyJoWWNJ', category: 'jobs', name: 'WEB RESEARCH AND DATA ENTRY, UPWORK', organizations: [{ id: 172333, name: 'Torre' }],
          },
          experienceTarget: {
            id: 'kNmD7Dy5', category: 'jobs', name: 'UX Researcher', organizations: [{ id: 172333, name: 'Torre' }],
          },
          interactionVerificationId: 'ZNO4YmM8',
          created: '2018-08-08T16:03:35',
        },
        recommendation: {
          id: 'zNGZAKyx', duration: 'months', strengths: ['Interviewing Skills', 'Market Research', 'Leadership'], weight: 11.7283, created: '2018-08-08T16:03:16',
        },
      }, {
        relationship: 'work',
        personSourceId: 'WNVYdKyr',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: 'kyb0enMz',
          experienceSource: {
            id: 'VjwOL4j4', category: 'jobs', name: 'Operations Coordinator', organizations: [{ id: 172333, name: 'Torre' }],
          },
          experienceTarget: {
            id: 'kNmD7Dy5', category: 'jobs', name: 'UX Researcher', organizations: [{ id: 172333, name: 'Torre' }],
          },
          interactionVerificationId: 'GxM9RWjQ',
          created: '2018-08-14T23:06:35',
        },
        recommendation: {
          id: 'WNVYlYyr', duration: 'months', strengths: ['Interviewing Skills', 'Market Research'], weight: 15.2189, interactionRecommendationId: 'G0yzpgME', created: '2018-08-14T23:06:31',
        },
      }, {
        relationship: 'purchase',
        personSourceId: 'AMWwrqMn',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: 'xM9EYrMQ',
          experienceTarget: {
            id: 'kNmD7Dy5', category: 'jobs', name: 'UX Researcher', organizations: [{ id: 172333, name: 'Torre' }],
          },
          created: '2018-08-15T11:10:10',
        },
        recommendation: {
          id: 'bjA9LqjX', duration: 'hours', strengths: ['Interviewing Skills', 'UX Research', 'Desirability / value testing'], weight: 0.2987, created: '2018-08-15T11:11:01',
        },
      }, {
        relationship: 'work',
        personSourceId: '8jp957yX',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: 'nM4nPWy7',
          experienceSource: {
            id: '0yzABXjE', category: 'jobs', name: 'Full-Stack developer', organizations: [{ id: 172333, name: 'Torre' }],
          },
          experienceTarget: {
            id: 'kNmD7Dy5', category: 'jobs', name: 'UX Researcher', organizations: [{ id: 172333, name: 'Torre' }],
          },
          interactionVerificationId: 'wM7G0DMY',
          created: '2018-09-05T02:41:36',
        },
        recommendation: {
          id: 'ZNO45oM8', duration: 'months', strengths: ['UX Research', 'Usability Testing', 'Research'], weight: 7.0737, interactionRecommendationId: '9MBDeAyg', created: '2018-09-05T02:41:30',
        },
      }, {
        relationship: 'work',
        personSourceId: '0vN8PNo8',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: '7M2V4gMR',
          experienceSource: {
            id: 'pyd8oByP', category: 'projects', name: 'Donor', organizations: [],
          },
          experienceTarget: {
            id: 'qNPYZrMK', category: 'projects', name: 'DONOR - Blood donation awareness and promotion (Torre Social)', organizations: [{ id: 172333, name: 'Torre' }],
          },
          interactionVerificationId: 'Oj6dL3Np',
          created: '2018-11-01T17:19:44',
        },
        recommendation: {
          id: 'JyQxnXjQ', duration: 'months', strengths: ['Creativity', 'Innovation', 'Human-Centered Design'], weight: 26.4875, interactionRecommendationId: '7M26qEMR', created: '2018-11-01T17:19:33',
        },
      }, {
        relationship: 'work',
        personSourceId: 'xyXwAejq',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: 'mjl7QVMZ',
          experienceSource: {
            id: 'BMLO78ND', category: 'jobs', name: 'Software Engineer', organizations: [{ id: 172333, name: 'Torre' }],
          },
          experienceTarget: {
            id: 'kNmD7Dy5', category: 'jobs', name: 'UX Researcher', organizations: [{ id: 172333, name: 'Torre' }],
          },
          interactionVerificationId: '8yZeqLjB',
          created: '2019-04-01T19:39:29',
        },
        recommendation: {
          id: 'gyYwB6MP', duration: 'months', strengths: ['UX Research', 'People skills'], weight: 43.0272, interactionRecommendationId: 'KNx4l3NE', created: '2019-04-01T19:39:19',
        },
      }, {
        relationship: 'teach',
        personSourceId: 'pyJkpWNJ',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: 'ANalw8yn',
          experienceTarget: {
            id: 'kNmD7Dy5', category: 'jobs', name: 'UX Researcher', organizations: [{ id: 172333, name: 'Torre' }],
          },
          created: '2019-07-11T23:19:39',
        },
        recommendation: {
          id: 'Ajrl50ND', duration: 'hours', strengths: ['Interviewing Skills', 'Usability Testing', 'Front-end development'], weight: 0.0872, interactionRecommendationId: '7M2n72MR', created: '2019-07-11T23:07:49',
        },
      }, {
        relationship: 'work',
        personSourceId: 'xyXwAejq',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: 'WNVo0VMr',
          experienceSource: {
            id: 'BMLO78ND', category: 'jobs', name: 'Software Engineer', organizations: [{ id: 172333, name: 'Torre' }],
          },
          experienceTarget: {
            id: '8jpwA8MX', category: 'projects', name: 'Torre', organizations: [{ id: 172333, name: 'Torre' }],
          },
          created: '2019-09-03T00:49:54',
        },
        recommendation: {
          id: 'pyJPbkMJ', duration: 'months', strengths: ['Leadership', 'UX Research'], weight: 43.0272, created: '2019-09-03T00:50:39',
        },
      }, {
        relationship: 'work',
        personSourceId: '8jp957yX',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: 'JMeX0EN0',
          experienceSource: {
            id: '0yzABXjE', category: 'jobs', name: 'Full-Stack developer', organizations: [{ id: 172333, name: 'Torre' }],
          },
          experienceTarget: {
            id: '8jpwA8MX', category: 'projects', name: 'Torre', organizations: [{ id: 172333, name: 'Torre' }],
          },
          created: '2019-09-03T02:36:06',
        },
        recommendation: {
          id: 'GNKY1Xj5', duration: 'months', strengths: ['UX Research', 'Visual Analysis', 'Creativity'], weight: 7.0737, created: '2019-09-03T02:37:53',
        },
      }, {
        relationship: 'work',
        personSourceId: 'XMqww7y5',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: 'Oj6Klgyp',
          experienceSource: {
            id: 'bjA85wMX', category: 'jobs', name: 'Software Engineer', organizations: [{ id: 172333, name: 'Torre' }],
          },
          experienceTarget: {
            id: '8jpwA8MX', category: 'projects', name: 'Torre', organizations: [{ id: 172333, name: 'Torre' }],
          },
          created: '2019-09-03T14:10:58',
        },
        recommendation: {
          id: 'bjAY1vjX', duration: 'months', strengths: ['Interviewing Skills', 'Usability Testing', 'UX Research'], weight: 21.2241, created: '2019-09-03T14:11:32',
        },
      }, {
        relationship: 'work',
        personSourceId: 'kNmDLDy5',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: 'OMvgQEj8',
          experienceSource: {
            id: 'zNGea6jx', category: 'jobs', name: 'Freelance Marketing Analyst', organizations: [{ id: 172333, name: 'Torre' }],
          },
          experienceTarget: {
            id: 'kNmD7Dy5', category: 'jobs', name: 'UX Researcher', organizations: [{ id: 172333, name: 'Torre' }],
          },
          interactionVerificationId: '8jp4evjX',
          created: '2019-11-07T19:25:34',
        },
        recommendation: {
          id: 'mjlvmaNZ', duration: 'months', strengths: ['UX Research', 'Interviewing Skills', 'Team Player'], weight: 20.7393, interactionRecommendationId: 'ZNO7nrN8', created: '2019-11-07T19:25:27',
        },
      }],
      people: [{
        id: '0xyXVMqw', subjectId: '37', publicId: 'manolo', name: 'Manuel Montes', hasEmail: true, professionalHeadline: 'Founding member and Tech Lead of Torre', picture: 'https://starrgate.s3.amazonaws.com:443/users/97875998db0346c35fc3fd815df4802e99157dae/profile_h5u4pFr.jpg', pictureThumbnail: 'https://starrgate.s3.amazonaws.com:443/CACHE/images/users/97875998db0346c35fc3fd815df4802e99157dae/profile_h5u4pFr/7a2f816471f0439e87f3c691df235ed3.jpg', weight: 1870.0915,
      }, {
        id: 'GxM9YOMQ', subjectId: '1241', publicId: 'melahbi', name: 'Melanie Helmrich', hasEmail: true, professionalHeadline: '(Localization Manager | Customer Service | Interior Designer)', picture: 'https://starrgate.s3.amazonaws.com:443/users/8b80e1950bb27d02355294c80b24611cdc147038/profile_dS0pNmB.jpg', pictureThumbnail: 'https://starrgate.s3.amazonaws.com:443/users/8b80e1950bb27d02355294c80b24611cdc147038/profile_dS0pNmB.jpg', weight: 917.6,
      }, {
        id: 'evy5WvMY', subjectId: '8470', publicId: 'luisamoscoso_', name: 'Luisa Moscoso', hasEmail: true, professionalHeadline: "I'm the CTO of Bunny Studio.", picture: 'https://starrgate.s3.amazonaws.com:443/users/0532e6af180a55dde604ce74584f5a4b5848cdb7/profile_VTVQ1eU.jpg', pictureThumbnail: 'https://starrgate.s3.amazonaws.com:443/CACHE/images/users/0532e6af180a55dde604ce74584f5a4b5848cdb7/profile_VTVQ1eU/491d919a0268f5bdbb7b3c63244f2476.jpg', weight: 2839.8515,
      }, {
        id: 'GgMRn0M6', subjectId: '2654', publicId: 'ac', name: 'Andrés Cajiao', hasEmail: true, professionalHeadline: 'Co-Founder and Chief Growth Officer at torre', picture: 'https://starrgate.s3.amazonaws.com:443/users/2c831e5c23c01d1f4c65b086784bc453e4985526/profile_wSB2AwN.jpg', pictureThumbnail: 'https://starrgate.s3.amazonaws.com:443/CACHE/images/users/2c831e5c23c01d1f4c65b086784bc453e4985526/profile_wSB2AwN/268733757b42d687b772d5d35222402c.jpg', weight: 2156.5174,
      }, {
        id: 'WNVYdKyr', subjectId: '953', publicId: 'ricardojimenez', name: 'Ricardo Jiménez', hasEmail: true, professionalHeadline: 'Entrepreneur. Business Development & Product.', picture: 'https://starrgate.s3.amazonaws.com:443/users/bed98b7bc2cf4f9562a19f05839a41786bf78b3f/profile_BreHL7l.jpg', pictureThumbnail: 'https://starrgate.s3.amazonaws.com:443/users/bed98b7bc2cf4f9562a19f05839a41786bf78b3f/profile_BreHL7l.jpg', weight: 542.6599,
      }, {
        id: 'bjAW4YNX', subjectId: '920', publicId: 'consuelocacereslozano', name: 'Consuelo Cáceres Lozano', hasEmail: true, professionalHeadline: 'Systems engineer', weight: 0,
      }, {
        id: 'OMv9D9N8', subjectId: '8578', publicId: 'stevenlowell', name: 'Steven Lowell', hasEmail: true, professionalHeadline: 'Talent Sourcing | Career Coach | Problem Solver | Writer | Definitely NOT a Recruiter', picture: 'https://starrgate.s3.amazonaws.com:443/users/38a41cee65a5922c6b48536503018248b9c39797/profile_2xy3vdC.jpeg', pictureThumbnail: 'https://starrgate.s3.amazonaws.com:443/CACHE/images/users/38a41cee65a5922c6b48536503018248b9c39797/profile_2xy3vdC/dd3a604d0b672dfbd94c227510eb4414.jpeg', weight: 0.0173,
      }, {
        id: 'qy0lPdyg', subjectId: '7027', publicId: 'hannahpringmirondo', name: 'Grace Hannah Pring-Mirondo', hasEmail: true, professionalHeadline: 'Lead Recruitment Specialist', picture: 'https://starrgate.s3.amazonaws.com:443/users/3803d516f9289c6bfe4a6c11b6f6ce5ea7d7d150/profile_iu9H5Fl.jpg', pictureThumbnail: 'https://starrgate.s3.amazonaws.com:443/users/3803d516f9289c6bfe4a6c11b6f6ce5ea7d7d150/profile_iu9H5Fl.jpg', weight: 45.4715,
      }, {
        id: 'AMWwrqMn', subjectId: '3438', publicId: 'guido', name: 'Guido Vezzoni', hasEmail: true, professionalHeadline: 'Senior Android Developer & Technology Enthusiast', picture: 'https://starrgate.s3.amazonaws.com:443/users/e42f11007f1b42cb8b9c046f520c0b53498cd9c8/profile_vmvAG7x.jpg', pictureThumbnail: 'https://starrgate.s3.amazonaws.com:443/users/e42f11007f1b42cb8b9c046f520c0b53498cd9c8/profile_vmvAG7x.jpg', weight: 3182.1743,
      }, {
        id: '8jp957yX', subjectId: '5806', publicId: 'andreaclynn', name: 'Andrea Carolina Buitrago', hasEmail: true, professionalHeadline: 'Web and Mobile Developer', picture: 'https://starrgate.s3.amazonaws.com:443/users/fdc68703214ef6f1f6a3a83411fe945d23d7c60c/profile_KBfXBbM.jpg', pictureThumbnail: 'https://starrgate.s3.amazonaws.com:443/CACHE/images/users/fdc68703214ef6f1f6a3a83411fe945d23d7c60c/profile_KBfXBbM/99be80cbcf970ade7ae4c465fb190109.jpg', weight: 735.7451,
      }, {
        id: '0vN8PNo8', subjectId: '554', publicId: 'danielaavila', name: 'Daniela Avila Gomez', hasEmail: true, professionalHeadline: 'Product designer at Torre', picture: 'https://starrgate.s3.amazonaws.com:443/users/decd68d0880f7bedbd9b4224bda1d77cda7f7cb9/profile_da9Ljb0.jpg', pictureThumbnail: 'https://starrgate.s3.amazonaws.com:443/CACHE/images/users/decd68d0880f7bedbd9b4224bda1d77cda7f7cb9/profile_da9Ljb0/c47d9f1b673c96814ab051d34e0b9280.jpg', weight: 9448.379,
      }, {
        id: 'xyXwAejq', subjectId: '13276', publicId: 'agurodriguez', name: 'Agu Rodríguez', hasEmail: true, professionalHeadline: '#coder #digitalnomad #engineer #entrepreneur #optimist #remoter', picture: 'https://starrgate.s3.amazonaws.com:443/users/534baf4a8c573d31c607ee6dd744e136afe978cc/profile_aZqioaH.jpg', pictureThumbnail: 'https://starrgate.s3.amazonaws.com:443/CACHE/images/users/534baf4a8c573d31c607ee6dd744e136afe978cc/profile_aZqioaH/857e2beb098078e3f76c89b0a605be3e.jpg', weight: 1623.5321,
      }, {
        id: 'pyJkpWNJ', subjectId: '11863', publicId: 'linazoom', name: 'Lina M. Currea F.', hasEmail: true, professionalHeadline: 'Graphic Designer by profession', picture: 'https://starrgate.s3.amazonaws.com:443/users/261a0501d3c587bd8240a93e58fdb72f73e4af14/profile_iMAPlZ7.jpg', pictureThumbnail: 'https://starrgate.s3.amazonaws.com:443/users/261a0501d3c587bd8240a93e58fdb72f73e4af14/profile_iMAPlZ7.jpg', weight: 405.552,
      }, {
        id: 'XMqww7y5', subjectId: '15778', publicId: 'slinan10', name: 'Santiago Liñán Romero', hasEmail: true, professionalHeadline: 'Software engineer & entrepreneur.  Skilled in software architectures, full-stack web and mobile development and automated testing.', picture: 'https://starrgate.s3.amazonaws.com:443/users/0418b668f67363c145af30ec37f28157a4230a7a/profile_CcBYYGP.jpg', pictureThumbnail: 'https://starrgate.s3.amazonaws.com:443/CACHE/images/users/0418b668f67363c145af30ec37f28157a4230a7a/profile_CcBYYGP/0a2227a4e37393da754a58d6462996f5.jpg', weight: 309.507,
      }, {
        id: 'kNmDLDy5', subjectId: '9080', publicId: 'andresgfranco', name: 'Andrés González Franco', hasEmail: true, professionalHeadline: 'Associate UX Researcher', picture: 'https://starrgate.s3.amazonaws.com:443/users/82f719dc5d619cf7e4ed31be0c013f3435133cf5/profile_eq8uD2t.jfif', pictureThumbnail: 'https://starrgate.s3.amazonaws.com:443/CACHE/images/users/82f719dc5d619cf7e4ed31be0c013f3435133cf5/profile_eq8uD2t/39e63d37a5e5ed3e6b7fee4932bc1ed6.jfif', weight: 572.2888,
      }, {
        id: 'PbjAmZjX', subjectId: '35', publicId: 'ana-maria-diaz', name: 'Ana Maria Diaz', hasEmail: true, professionalHeadline: 'UX Researcher/Designer - MSc. Software Engineer - MA Cultural & Creative Industries', picture: 'https://starrgate.s3.amazonaws.com:443/users/80cd635dbd1dcbb28e9dbc05078d2a8050752a35/profile_DcWxCCy.jpg', pictureThumbnail: 'https://starrgate.s3.amazonaws.com:443/users/80cd635dbd1dcbb28e9dbc05078d2a8050752a35/profile_DcWxCCy.jpg', weight: 6114.3723,
      }],
    }],
  },

  {
    page: 3,
    total: 66,
    elements: [{
      connections: [{
        relationship: 'consume',
        personSourceId: '0vN8PNo8',
        personTargetId: 'PbjAmZjX',
        recommendation: {
          id: 'pyJe2gjJ', duration: 'minutes', strengths: ['Interviewing Skills', 'UX Research', 'Desirability / value testing'], weight: 0.0006, created: '2018-07-18T16:38:28',
        },
      }, {
        relationship: 'interacted',
        personSourceId: '0vN8PNo8',
        personTargetId: 'PbjAmZjX',
        recommendation: {
          id: 'LMgEOVyE', duration: 'minutes', strengths: ['Interviewing Skills', 'Market Research'], weight: 0.0006, created: '2018-07-18T16:39:26',
        },
      }, {
        relationship: 'interacted',
        personSourceId: '0vN8PNo8',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: 'RBMLdXMD',
          experienceSource: {
            id: '8jp68mNX', category: 'jobs', name: 'Associate product designer', organizations: [{ id: 172333, name: 'Torre' }],
          },
          created: '2018-07-18T17:07:46',
        },
        recommendation: {
          id: '0yzrzRyE', duration: 'minutes', strengths: ['Interviewing Skills'], weight: 0.0006, created: '2018-07-18T17:01:48',
        },
      }, {
        relationship: 'lead',
        personSourceId: 'eLMgxgjE',
        personTargetId: 'PbjAmZjX',
        recommendation: {
          id: 'JyQeYeyQ', duration: 'minutes', strengths: ['Interviewing Skills', 'Market Research', 'UX Research'], weight: 0.0048, created: '2018-07-23T23:24:42',
        },
      }, {
        relationship: 'interacted',
        personSourceId: 'OMv9D9N8',
        personTargetId: 'PbjAmZjX',
        recommendation: {
          id: '9MBDaKyg', duration: 'hours', strengths: ['Interviewing Skills', 'Market Research'], weight: 0.0073, interactionRecommendationId: 'ZNO4YmM8', created: '2018-07-28T12:04:53',
        },
      }, {
        relationship: 'worked',
        personSourceId: 'JMe7P6y0',
        personTargetId: 'PbjAmZjX',
        verification: {
          id: 'bjA6aYyX',
          experienceSource: {
            id: '0yzb6ayE', category: 'education', name: 'Electrical Engineering', organizations: [{ id: 175056, name: 'Universidad de los andes' }],
          },
          experienceTarget: {
            id: 'JMezbej0', category: 'projects', name: 'University of Los Andes Choir', organizations: [{ id: 175056, name: 'Universidad de los andes' }],
          },
          created: '2019-09-03T19:31:43',
        },
        recommendation: {
          id: '9ME5VQMl', duration: 'years', strengths: ['Singing', 'Team work', 'Discipline'], weight: 0, created: '2019-09-03T19:32:38',
        },
      }],
      people: [{
        id: '0vN8PNo8', subjectId: '554', publicId: 'danielaavila', name: 'Daniela Avila Gomez', hasEmail: true, professionalHeadline: 'Product designer at Torre', picture: 'https://starrgate.s3.amazonaws.com:443/users/decd68d0880f7bedbd9b4224bda1d77cda7f7cb9/profile_da9Ljb0.jpg', pictureThumbnail: 'https://starrgate.s3.amazonaws.com:443/CACHE/images/users/decd68d0880f7bedbd9b4224bda1d77cda7f7cb9/profile_da9Ljb0/c47d9f1b673c96814ab051d34e0b9280.jpg', weight: 9448.379,
      }, {
        id: 'eLMgxgjE', subjectId: '2682', publicId: 'christopherlewiswhite', name: 'Christopher Lewis White', hasEmail: true, professionalHeadline: 'Technical Analyst', picture: 'https://starrgate.s3.amazonaws.com:443/users/2c63f6a55eba8cce87c2e0edebcaf07dda689e3a/profile_Vpq4EwZ.jpg', pictureThumbnail: 'https://starrgate.s3.amazonaws.com:443/users/2c63f6a55eba8cce87c2e0edebcaf07dda689e3a/profile_Vpq4EwZ.jpg', weight: 0.0005,
      }, {
        id: 'OMv9D9N8', subjectId: '8578', publicId: 'stevenlowell', name: 'Steven Lowell', hasEmail: true, professionalHeadline: 'Talent Sourcing | Career Coach | Problem Solver | Writer | Definitely NOT a Recruiter', picture: 'https://starrgate.s3.amazonaws.com:443/users/38a41cee65a5922c6b48536503018248b9c39797/profile_2xy3vdC.jpeg', pictureThumbnail: 'https://starrgate.s3.amazonaws.com:443/CACHE/images/users/38a41cee65a5922c6b48536503018248b9c39797/profile_2xy3vdC/dd3a604d0b672dfbd94c227510eb4414.jpeg', weight: 0.0173,
      }, {
        id: 'JMe7P6y0', subjectId: '981', publicId: 'francyramirez', name: 'Francy Ramirez', hasEmail: true, professionalHeadline: 'Electrical engineering, validation & verification of GHG schemes, energy management systems', weight: 0,
      }, {
        id: 'PbjAmZjX', subjectId: '35', publicId: 'ana-maria-diaz', name: 'Ana Maria Diaz', hasEmail: true, professionalHeadline: 'UX Researcher/Designer - MSc. Software Engineer - MA Cultural & Creative Industries', picture: 'https://starrgate.s3.amazonaws.com:443/users/80cd635dbd1dcbb28e9dbc05078d2a8050752a35/profile_DcWxCCy.jpg', pictureThumbnail: 'https://starrgate.s3.amazonaws.com:443/users/80cd635dbd1dcbb28e9dbc05078d2a8050752a35/profile_DcWxCCy.jpg', weight: 6114.3723,
      }],
    }],
  },

];

export default MOCK_DATA;
