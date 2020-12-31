import { city } from './ClassFamily.js'
import { family } from './ClassFamily.js'

class MemberFamily extends HTMLElement{

	constructor(){
		super();
		this._shadowDom = this.attachShadow({mode: 'open'});
		this.name = this.getAttribute('name');
		this._shadowDom.innerHTML = `
			<style>
				.container{
					width: 50%;
					height: 65%;
					margin: 15vh auto;
					padding: 10px;
					text-align: center;
					box-shadow: 0 0 10px black;
					background: #8c7ae6;
					color: white;
				}

				.heading__title{
					font-size: 5vh;
					text-transform: uppercase;
					font-weight: bold;
					margin: 2vh 0;
				}

				.heading__member{
					font-size: 3vh;
					font-weight: bold;
					text-transform: capitalize;
				}

				.content{
					display: flex;
					border-radius: 10px;
					background: #fbc531;
					box-shadow: 0 0 10px black;
					margin: 5vh auto;
					width: 80%;
					height: 40vh;
					justify-content: space-around;
					align-items: center;
				}

				.member{
					font-weight: bold;
					background: #e84118;
					width: calc(100%/4);
					height: 60%;
					border-radius: 10px;
					display: flex;
					flex-direction: column;
					text-transform: capitalize;
					justify-content: center;
					box-shadow: inset -3px -3px 10px black,
								inset 3px 3px 10px black;
				}

				.name{
					font-size: 5vh;
				}

				.age{
					font-size: 4vh;
					margin: 1.5vh;
				}

				.job{
					font-size: 3vh;
				}

				.footer{
					font-size: 3vh;
					background: red;
					margin: -2vh auto;
					box-shadow: 0 0 10px black;
					width: 60%;
					text-transform: capitalize;
				}
			</style>
			<div class="container">
				<div class="heading">
					<div class="heading__title">
						Gia đình chúng tôi
					</div>
					<div class="heading__member">
						Gồm: ${family.numOfPeople} thành viên
					</div>
				</div>
				<div class="content">
					<div class="dad member">
						<div class="name">
							${family.listPeople[1].name}
						</div>
						<div class="age">
							${family.listPeople[1].age}
						</div>
						<div class="job">
							${family.listPeople[1].job}
						</div>
					</div>
					<div class="mom member">
						<div class="name">
							${family.listPeople[2].name}
						</div>
						<div class="age">
							${family.listPeople[2].age}
						</div>
						<div class="job">
							${family.listPeople[2].job}
						</div>
					</div>
					<div class="child member">
						<div class="name">
							${family.listPeople[0].name}
						</div>
						<div class="age">
							${family.listPeople[0].age}
						</div>
						<div class="job">
							${family.listPeople[0].job}
						</div>
					</div>
				</div>
				<div class="footer">
					we are live in ${city.name}
				</div>
			</div>
		`;
	}

	connectedCallback(){

	}
}

window.customElements.define('member-family', MemberFamily);

