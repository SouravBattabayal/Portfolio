import React from 'react'

function Projects() {
    return (
        <>
            <div id="Projects" className='text-[#5cdeff] flex flex-col min-h-screen m-4'>
                {/* Q 1 */}
                <div className='my-2'>
                    <h2 className='font-bold text-3xl'>Source Code</h2>
                    <p className='text-xl bg-slate-600 p-3 rounded-t-lg'># Given list of numbers  <br />
                        numbers = [1, 2, 3, 4, 5]   <br />
                        # Create a list of tuples where each tuple is (number, cube of number)  <br />
                        number_and_cube = [(num, num**3) for num in numbers]    <br />
                        # Print the list of tuples  <br />
                        print(number_and_cube)</p>
                    <div className='pt-5 text-[#f52929] bg-[#4d4d4d] rounded-b-lg'>
                        <h3 className='font-bold text-2xl'>Output</h3>
                        <p className='text-lg'>[(1, 1), (2,8), (3,27), (4,64), (5,125)]</p>
                    </div>
                </div>

                {/* Q 2 */}
                <div className='my-2'>
                    <h2 className='font-bold text-3xl'>Source Code</h2>
                    <p className='text-xl bg-slate-600 p-3 rounded-t-lg'># Given tuple matrix
                        matrix = [  <br />
                        (1, 2, 3),  <br />
                        (4, 5, 6),  <br />
                        (7, 8, 9)   <br />
                        ]   <br />
                        # Perform row-wise addition <br />
                        row_sums = [sum(row) for row in matrix] <br />
                        # Print the result  <br />
                        print("Row-wise element sums:", row_sums)</p>
                    <div className='pt-5 text-[#f52929] bg-[#4d4d4d] rounded-b-lg'>
                        <h3 className='font-bold text-2xl'>Output</h3>
                        <p className='text-lg'>Row-wise element sums: [6, 15, 24]</p>
                    </div>
                </div>

                {/* Q 3 */}
                <div className='my-2'>
                    <h2 className='font-bold text-3xl'>Source Code</h2>
                    <p className='text-xl bg-slate-600 p-3 rounded-t-lg'>
                        # Global variable   <br />
                        x = 10  <br />
                        def my_function():  <br />
                        # Create a local copy of the global variable    <br />
                        local_x = x # This copies the value of global x into a local variable   <br />
                        local_x = 20 # Modify the local copy    <br />
                        print("Inside function: local_x =", local_x)    <br />
                        print("Inside function: x (global) =", x)   <br />
                        # Call the function <br />
                        my_function()   <br />
                        # Check the global variable after function call <br />
                        print("Outside function: x (global) =", x)
                    </p>
                    <div className='pt-5 text-[#f52929] bg-[#4d4d4d] rounded-b-lg'>
                        <h3 className='font-bold text-2xl'>Output</h3>
                        <p className='text-lg'>
                            Inside function: local_x = 20   <br />
                            Inside function: x (global) = 10    <br />
                            Outside function: x (global) = 10
                        </p>
                    </div>
                </div>

                {/* Q 4 */}
                <div className='my-2'>
                    <h2 className='font-bold text-3xl'>Source Code</h2>
                    <p className='text-xl bg-slate-600 p-3 rounded-t-lg'>
                        # Recursive function to calculate factorial <br />
                        def factorial(n):   <br />
                        # Base case: if n is 0 or 1, factorial is 1 <br />
                        if n == 0 or n == 1:    <br />
                        return 1    <br />
                        else:   <br />
                        # Recursive case: n * factorial of (n-1)    <br />
                        return n * factorial(n - 1) <br />
                        # Input from user   <br />
                        num = int(input("Enter a number: "))    <br />
                        # Call the factorial function   <br />
                        result = factorial(num) <br />
                        # Print the result  <br />
                        print(f"The factorial of num is: result")
                    </p>
                    <div className='pt-5 text-[#f52929] bg-[#4d4d4d] rounded-b-lg'>
                        <h3 className='font-bold text-2xl'>Output</h3>
                        <p className='text-lg'>
                            Enter a number: 5   <br />
                            The factorial of 5 is: 120
                        </p>
                    </div>
                </div>
                {/* Done */}


                {/* Q 5 */}
                <div className='my-2'>
                    <h2 className='font-bold text-3xl'>Source Code</h2>
                    <p className='text-xl bg-slate-600 p-3 rounded-t-lg'>
                        # Given list of numbers  <br />
                        numbers = [1, 2, 3, 4, 5]   <br />
                        # Create a list of tuples where each tuple is (number, cube of number)  <br />
                        number_and_cube = [(num, num**3) for num in numbers]    <br />
                        # Print the list of tuples  <br />
                        print(number_and_cube)
                    </p>
                    <div className='pt-5 text-[#f52929] bg-[#4d4d4d] rounded-b-lg'>
                        <h3 className='font-bold text-2xl'>Output</h3>
                        <p className='text-lg'>[(1, 1), (2,8), (3,27), (4,64), (5,125)]</p>
                    </div>
                </div>

                {/* Q 6 */}
                <div className='my-2'>
                    <h2 className='font-bold text-3xl'>Source Code</h2>
                    <p className='text-xl bg-slate-600 p-3 rounded-t-lg'>
                        # Given list of numbers  <br />
                        numbers = [1, 2, 3, 4, 5]   <br />
                        # Create a list of tuples where each tuple is (number, cube of number)  <br />
                        number_and_cube = [(num, num**3) for num in numbers]    <br />
                        # Print the list of tuples  <br />
                        print(number_and_cube)
                    </p>
                    <div className='pt-5 text-[#f52929] bg-[#4d4d4d] rounded-b-lg'>
                        <h3 className='font-bold text-2xl'>Output</h3>
                        <p className='text-lg'> </p>
                    </div>
                </div>

                {/* Q 7 */}
                <div className='my-2'>
                    <h2 className='font-bold text-3xl'>Source Code</h2>
                    <p className='text-xl bg-slate-600 p-3 rounded-t-lg'>
                        # Given list of numbers  <br />
                        numbers = [1, 2, 3, 4, 5]   <br />
                        # Create a list of tuples where each tuple is (number, cube of number)  <br />
                        number_and_cube = [(num, num**3) for num in numbers]    <br />
                        # Print the list of tuples  <br />
                        print(number_and_cube)
                    </p>
                    <div className='pt-5 text-[#f52929] bg-[#4d4d4d] rounded-b-lg'>
                        <h3 className='font-bold text-2xl'>Output</h3>
                        <p className='text-lg'> </p>
                    </div>
                </div>

                {/* Q 8 */}
                <div className='my-2'>
                    <h2 className='font-bold text-3xl'>Source Code</h2>
                    <p className='text-xl bg-slate-600 p-3 rounded-t-lg'>
                        # Given list of numbers  <br />
                        numbers = [1, 2, 3, 4, 5]   <br />
                        # Create a list of tuples where each tuple is (number, cube of number)  <br />
                        number_and_cube = [(num, num**3) for num in numbers]    <br />
                        # Print the list of tuples  <br />
                        print(number_and_cube)
                    </p>
                    <div className='pt-5 text-[#f52929] bg-[#4d4d4d] rounded-b-lg'>
                        <h3 className='font-bold text-2xl'>Output</h3>
                        <p className='text-lg'></p>
                    </div>
                </div>

                {/* Q 9 */}
                <div className='my-2'>
                    <h2 className='font-bold text-3xl'>Source Code</h2>
                    <p className='text-xl bg-slate-600 p-3 rounded-t-lg'>
                        # Given list of numbers  <br />
                        numbers = [1, 2, 3, 4, 5]   <br />
                        # Create a list of tuples where each tuple is (number, cube of number)  <br />
                        number_and_cube = [(num, num**3) for num in numbers]    <br />
                        # Print the list of tuples  <br />
                        print(number_and_cube)
                    </p>
                    <div className='pt-5 text-[#f52929] bg-[#4d4d4d] rounded-b-lg'>
                        <h3 className='font-bold text-2xl'>Output</h3>
                        <p className='text-lg'></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects
