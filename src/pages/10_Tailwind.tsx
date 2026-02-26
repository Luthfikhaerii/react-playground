export default function Tailwind() {
    return(
        <>
         <p className="text-red-500">Tailwind</p>

         <div className="space-y-4">
            <p>child 1</p>
            <p>child 2</p>
            <p>child 3</p>
            <p>child 4</p>
         </div>

         <div className="flex items-center justify-center space-x-4"> 
            <p>child 1</p>
            <p>child 2</p>
            <p>child 3</p>
            <p>child 4</p>
         </div>

         <div className="grid grid-cols-2 items-center justify-center gap-4">
            <p>child 1</p>
            <p>child 2</p>
            <p>child 3</p>
            <p>child 4</p>
         </div>

         <div className="bg-black-mamba w-10 h-10">

         </div>

         <p className="font-pinyon h-2xl">Pinyon Font</p>
        </>
    )
}