document.getElementById('button').addEventListener('click', showAge)

function showAge () {
	let date = new Date
	let age = date.getFullYear() - Number(document.getElementById('birth-year').value)
	let photo = document.getElementById('person-photo')
	let maleChecked = document.getElementById('male').checked
	let femaleChecked = document.getElementById('female').checked
	let genre = ""
	if (maleChecked) {
		genre = "homem"
	} else if (femaleChecked) {
		genre = "mulher"
	}

	if (document.getElementById('birth-year').value.length == 0 || Number(document.getElementById('birth-year').value) > date.getFullYear()) { 
		window.alert('Verifique os dados e tente novamente!')
	} else {
		document.getElementById('result').innerHTML = `Detectamos ${genre} com ${age} anos.`

		if (maleChecked) {
			switch (true) {
				case age >= 0 && age < 12:
					photo.src = "./ex015-assets/boy.jpg"
					break
				case age >= 12 && age < 18:
					photo.src = "./ex015-assets/male-teenager.jpg"
					break
				case age > 17 && age < 60:
					photo.src = "./ex015-assets/man.jpg"
					break
				case age >= 60:
					photo.src = "./ex015-assets/old-man.jpg"
					break
			}
		}

		if (femaleChecked) {
			switch (true) {
				case age >= 0 && age < 12:
					photo.src = "./ex015-assets/girl.jpg"
					break
				case age >= 12 && age < 18:
					photo.src = "./ex015-assets/female-teenager.jpg"
					break
				case age > 17 && age < 60:
					photo.src = "./ex015-assets/woman.jpg"
					break
				case age >= 60:
					photo.src = "./ex015-assets/old-woman.jpg"
					break
			}
		}
	}
}
