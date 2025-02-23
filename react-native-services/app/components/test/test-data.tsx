import { SectionListData } from "react-native";

export const SimpleData = [
    {
        name: 'Main dishes',
        data: ['Pizza', 'Burger', 'Risotto'],
      },
      {
        name: 'Sides',
        data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
      },
      {
        name: 'Drinks',
        data: ['Water', 'Coke', 'Beer'],
      },
      {
        name: 'Desserts',
        data: ['Cheese Cake', 'Ice Cream'],
      },
];

export type Contact = {firstName: string, secondName: string, phoneNumber: string};
// type Section = {title: string, data: Contact[]}

export const SimpleContacts: SectionListData<Contact>[] = [
  { title: 'a', 
    data: [
      { firstName: 'aaabbbccc', secondName: 'wwwyyyzzz', phoneNumber: '+01234567' },
      { firstName: 'aabbbbccc', secondName: 'wwyyyyzzz', phoneNumber: '+02134567' },
      { firstName: 'aacbbbccc', secondName: 'wwzyyyzzz', phoneNumber: '+03214567' }
    ]
  },
  { title: 'e', 
    data: [
      { firstName: 'eeebbbccc', secondName: 'vvvyyyzzz', phoneNumber: '+01234567' },
      { firstName: 'eebbbbccc', secondName: 'vvyyyyzzz', phoneNumber: '+02134567' },
      { firstName: 'eecbbbccc', secondName: 'vvzyyyzzz', phoneNumber: '+03214567' }
    ]
  },
  { title: 'j', 
    data: [
      { firstName: 'jjjbbbccc', secondName: 'tttyyyzzz', phoneNumber: '+01234567' },
      { firstName: 'jjbbbbccc', secondName: 'ttyyyyzzz', phoneNumber: '+02134567' },
      { firstName: 'jjcbbbccc', secondName: 'ttzyyyzzz', phoneNumber: '+03214567' }
    ]
  },
  { title: 'o', 
    data: [
      { firstName: 'ooobbbccc', secondName: 'oooyyyzzz', phoneNumber: '+01234567' },
      { firstName: 'oobbbbccc', secondName: 'ooyyyyzzz', phoneNumber: '+02134567' },
      { firstName: 'oocbbbccc', secondName: 'oozyyyzzz', phoneNumber: '+03214567' }
    ]
  }
];