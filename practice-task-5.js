/* 
you are in a hurry to go to your school on time. But when you are crossing the road, the traffic signal is red coloured. In this situation, if you try to cross the road, you may be in danger. If you notice a yellow coloured signal, you should stop. If you notice a green coloured traffic signal, you should cross the road. So write a js code, where there is a variable called signal. Its value can be green, yellow or red & we will get different activities as output depending on the variable. so hurry up. 
*/
var signal = 'reds';
switch (signal) {
    case 'green':
        console.log('You should cross the road');
        break;

    case 'yellow':
        console.log('You should stop');
        break;
    case 'red':
        console.log('If you try to cross the road, you may be in danger.');
        break;

    default:
        console.log('Signal Light Is Not Working')

}