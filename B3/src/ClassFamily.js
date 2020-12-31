export { city };
export { family };

class People{
	name
	age
	job
	id

	constructor(name, age, job, id){
		this.name = name;
		this.age = age;
		this.job = job;
		this.id = id;
	}

	showInfo(){
		return `
		I'm ${this.name}
		I'm ${this.age}
		My job ${this.job}
		`
	}
}

let child = new People('child', 15, 'Student', '3');
let dad = new People('dad', 34, 'Dev', '1');
let mom = new People('mom', 31, 'Test', '2');


class Family{
	address
	numOfPeople
	listPeople

	constructor(address){
		this.address = address;
		this.numOfPeople = 0;
		this.listPeople = [];
	}

	addPeople(people){
		this.numOfPeople ++;
		this.listPeople.push(people);
	}

	showInfo(){
		let peopleInfo = '';
		for(let i of this.listPeople){
			peopleInfo += i.showInfo();
		}
		return `

		Address: ${this.address}
		NumberOfPeople: ${this.numOfPeople}
		${peopleInfo}
		`
	}
}

let family = new Family('45A');
family.addPeople(child);
family.addPeople(dad);
family.addPeople(mom);

class City{
	listFamily
	numOfFamily
	name

	constructor(name){
		this.name = name;
		this.listFamily = [];
		this.numOfFamily = 0;
	}

	addFamily(family){
		this.listFamily.push(family);
		this.numOfFamily ++;
	}

	showInfo(){
		let familyInfo = '';
		for(let i of this.listFamily){
			familyInfo += i.showInfo();
		}
		return `
		Hello, This is my Family ${familyInfo}
		We in ${this.name} City
		`
	}
}

let city = new City('HaNoi');
city.addFamily(family);