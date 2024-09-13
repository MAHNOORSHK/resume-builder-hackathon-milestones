const toggleBtn = document.getElementById('toggle-btn-skill') as HTMLButtonElement

const skills = document.getElementById('skills') as HTMLElement

toggleBtn.addEventListener('click', ()=>{
    if(skills.style.display === 'none'){
        skills.style.display = 'block'
    }
    else{
        skills.style.display = 'none'
        
    }
});