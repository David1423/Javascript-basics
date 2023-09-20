// //1 = 00000001
// //2 = 00000010
// //3 = 00000011 -> reuslt of (1 | 2) - Bitwise OR.

// // when we apply the bitwise operators on above numbers
// // let say bitwise OR, it would compare the each respective bits of the numbers 
// // and result into 1 if any bit of both the numbers are 1 then that respective bit
// // would be resulted into 1.

// // if we apply bitwise AND, it compares the bits, and if both bits are one then only 
// // the resutant bit would be 1 otherwise 0. 

// //Bitwise OR
// console.log('Bitwise OR of (1 | 2) is:',1 | 2);
// //Bitwise AND
// console.log('Bitwise AND of (1 $ 2) is:',1 & 2);

// //Exercise

// //Read, Write, Execute
// //00000100 = 4
// //00000010 = 2
// //00000001 = 1

// const readPermission = 4;
// const writePersmission = 2;
// const executePermission = 1;

// let myPermission = 0;
// //with below bitwise OR we are actually adding the read and write permission to myPermission.
// myPermission = myPermission | readPermission | writePersmission ;

// //Using Bitwise AND for checking if we have read persmission
// let checkReadPermission = myPermission & readPermission ? 'yes' : 'No' ;
// console.log('Does have Read permission ?',checkReadPermission);

// let checkWritePermission = myPermission & writePersmission ? 'Yes' : 'No';
// console.log('Does have Write Permission ?', checkWritePermission);

// let checkExecutePermission = myPermission & executePermission ? 'Yes' : 'No';
// console.log('Does have Execute Permission ?', checkExecutePermission);