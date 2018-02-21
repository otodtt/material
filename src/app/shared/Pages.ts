const pages = [
    {
        id: 0,
        name: 'начало',
        link: 'home',
        subPage: null
    },
    {
        id: 1,
        name: 'продукти',
        link: 'products',
        subPage: null
    },
    {
        id: 2,
        name: 'култури',
        link: 'crops',
        subPage: null
    },
    {
        id: 3,
        name: 'полезно',
        link: 'practices',
        subPage: [
            {
                id: 0,
                subName: 'добри растителнозащитни практики',
                link: 'practices'
            },
            {
                id: 1,
                subName: 'интегрирано управление на вредители',
                link: 'management'
            },
            {
                id: 2,
                subName: 'прагове на икономическа вредност',
                link: 'thresholds'
            }
        ],
    },
    {
        id: 4,
        name: 'документи',
        link: 'documents',
        subPage: null
    },
    {
        id: 5,
        name: 'контакти',
        link: 'contacts',
        subPage: null
    }
];

export default pages;


// const pages = [
//     {
//         id: 0,
//         name: 'начало',
//         subPage: null,
//         link: 'home'
//     },
//     {
//         id: 1,
//         name: 'продукти',
//         subPage: [
//             {
//                 subName: 'фунгициди',
//             },
//             {
//                 subName: 'инсектициди',
//             },
//             {
//                 subName: 'акарициди',
//             },
//             {
//                 subName: 'нематоциди',
//             },
//             {
//                 subName: 'родентоциди',
//             },
//             {
//                 subName: 'лимациди',
//             },
//             {
//                 subName: 'репеленти',
//             },
//             {
//                 subName: 'феромони',
//             },
//             {
//                 subName: 'хербициди',
//             },
//             {
//                 subName: 'десиканти',
//             },
//             {
//                 subName: 'растежни регулатори',
//             }
//         ],
//         link: 'products'
//     },
//     {
//         id: 2,
//         name: 'култури',
//         subPage: null,
//         link: 'crops'
//     },
//     {
//         id: 3,
//         name: 'полезно',
//         subPage: [
//             {
//                 subName: 'добри растителнозащитни практики',
//             },
//             {
//                 subName: 'интегрирано управление на вредители',
//             },
//             {
//                 subName: 'прагове на икономическа вредност',
//             }
//         ],
//         link: 'practices'
//     },
//     {
//         id: 4,
//         name: 'документи',
//         subPage: null,
//         link: 'documents'
//     },
//     {
//         id: 5,
//         name: 'контакти',
//         subPage: null,
//         link: 'contacts'
//     }
// ];



