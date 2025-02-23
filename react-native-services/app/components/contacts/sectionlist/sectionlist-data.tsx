import { SectionListData } from "react-native";

export type Contact = {firstName: string, secondName: string, phoneNumber: string, img: string | undefined};
export type SectionContacts = {title: string, data: Contact[]}

// export const SimpleContacts0: SectionListData<Contact>[] | undefined = undefined;

export const SimpleContacts: SectionContacts[] = [
  { title: 'a', 
    data: [
      { firstName: 'aaabbb', secondName: 'wwwyyy', phoneNumber: '+01234567', img: undefined},
      { firstName: 'aabbbb', secondName: 'wwyyyy', phoneNumber: '+02134567', img: undefined },
      { firstName: 'aacbbb', secondName: 'wwzyyy', phoneNumber: '+03214567', img: undefined }
    ]
  },
  { title: 'e', 
    data: [
      { firstName: 'eeebbb', secondName: 'vvvyyy', phoneNumber: '+08234567', img: undefined },
      { firstName: 'eebbbb', secondName: 'vvyyyy', phoneNumber: '+08134567', img: undefined },
      { firstName: 'eecbbb', secondName: 'vvzyyy', phoneNumber: '+08214567', img: undefined }
    ]
  },
  { title: 'j', 
    data: [
      { firstName: 'jjjbbb', secondName: 'tttyyy', phoneNumber: '+09234567', img: undefined },
      { firstName: 'jjbbbb', secondName: 'ttyyyy', phoneNumber: '+09134567', img: undefined},
      { firstName: 'jjcbbb', secondName: 'ttzyyy', phoneNumber: '+09214567', img: undefined }
    ]
  },
  { title: 'o', 
    data: [
      { firstName: 'ooobbb', secondName: 'oooyyy', phoneNumber: '+01234569', img: undefined },
      { firstName: 'oobbbb', secondName: 'ooyyyy', phoneNumber: '+02134569', img: undefined },
      { firstName: 'oocbbb', secondName: 'oozyyy', phoneNumber: '+03214569', img: undefined }
    ]
  }
];