var names=new Array();
names[0]="Ehsan";
names[1]="Yaakov";
names[2]="James";
names[3]="Harry";
names[4]="John";
names[5]="David";
names[6]="larry";
names[7]="paula";
names[8]="laura";
names[9]="jim";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}