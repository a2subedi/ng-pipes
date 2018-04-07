import { Pipe,PipeTransform } from '@angular/core';

@Pipe ({ name:'tohex' })
export class tohex implements PipeTransform{
	transform(rgb: number) : string {
		let arg = rgb;
		let hex='',y='';
		let x=0;
			do{
				x = Math.floor(arg/16);
				let rem = arg % 16 ;
				arg = Math.floor(arg/16);
					
				if(rem <= 9){
					y+=rem;

				} 
				else if( rem>9 && rem<13 ){
					switch(rem){
						case 10:{
						y+='a';
						break;
						}
						case 11:{
						y+='b';
						break;
						}
						case 12:{
						y+='c';
						break;
						}
						default:
						//do nothing
					}
				}
				else{
					switch(rem){
						case 13:{
						y+='d';
						break;
						}
						case 14:{
						y+='e';
						break;
						}
						case 15:{
						y+='f';
						break
						}
						default:
						//do nothing
					}
				}

			}while(x!=0);
			if (y.length==1) {
				y+='0';
			}


			for (var j = y.length - 1; j >= 0; j--) {
				hex+=y[j];
			}

			return hex;
	}
}