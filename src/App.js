import './App.css';
import cytoscape from 'cytoscape';
import dagre from 'cytoscape-dagre';
import { useEffect, useRef } from 'react';
import graph from './graph.json';

cytoscape.use(dagre); // register dagre layout

function App() {
    const containerRef = useRef();

    useEffect(() => {
        const config = {
            container: containerRef.current,
            layout: {
                name: 'dagre',
            },
            style: [
                {
                    selector: "node",
                    style: {
                        content: "data(label)"
                    },
                },
                {
                    selector: 'edge',
                    style: {
                        'target-arrow-shape': 'triangle',
                        'target-arrow-color': 'black',
                        'source-arrow-color': 'black',
                        'line-color': '#333',
                        'width': 1.5,
                        'curve-style': 'bezier'
                    }
                }
            ],
            elements: graph.elements,
        };

        cytoscape(config);
    }, []);

    return (
        <div>
            <div ref={containerRef} style={{ height: "100vh" }} />
        </div>
    );
}

export default App;