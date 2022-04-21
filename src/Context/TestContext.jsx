import { useContext, createContext, useState } from "react";
import { useEffect } from "react";

const TestContext = createContext()
TestContext.displayName = "TestContext"

export const useTestContext = () => useContext(TestContext)

const mockTests = [
    {
        id: 0,
        question: 'Node JS nima ',
        variants: [
            {
                id: 0,
                content: 'Dasturlash tili?',
                isRight: false
            },
            {
                id: 1,
                content: 'Dastur',
                isRight: false
            },
            {
                id: 2,
                content: 'Run time Server',
                isRight: false
            },
            {
                id: 3,
                content: 'Node JS bu Javascript runtime server',
                isRight: true
            }
        ]
    },
    {
        id: 1,
        question: 'Javascript nima?',
        variants: [
            {
                id: 0,
                content: 'Dasturlash tili?',
                isRight: false
            },
            {
                id: 1,
                content: 'Kitob',
                isRight: false
            },
            {
                id: 2,
                content: 'O`yin',
                isRight: false
            },
            {
                id: 3,
                content: 'Ruhiy yuksalish tili',
                isRight: true
            }
        ]
    }
]

function TestContextProvider({ children }) {

    const [test, setTests] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (isLoading) {
            setTimeout(() => {
                setTests(mockTests)
                setIsLoading(false)
            }, 3500)
        }
    }, [isLoading]);

    const loadTest = () => {
        setIsLoading(true)
    }
    return (
        <TestContext.Provider
            value={
                {
                    loadTest,
                    test,
                }
            }>

            {children}
        </TestContext.Provider>
    )
}

export default TestContext;