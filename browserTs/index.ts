const button = document.querySelector<HTMLButtonElement>('#clicker')

if (button)
{
    button.addEventListener('click', (e) =>{
        if (e.currentTarget instanceof HTMLButtonElement)
        {
            console.log(e.currentTarget)
        }
    })
};
