import { type ReactElement } from 'react';

import { Button } from 'reakit/Button';

import styles from './Projects.module.css';

export const getProjects = (
  onEmailDialogOpen: () => void,
): Project[] => [
  {
    description: (
      <>
        <p>
          <strong>Logossim</strong> was a result of my undergraduate
          thesis on Computer Engineering. As the name implies,{' '}
          <a
            href="http://www.cburch.com/logisim"
            rel="noopener noreferrer"
            target="_blank"
          >
            Logisim
          </a>
          — an acclaimed logic circuit simulation software — was a big
          inspiration for this project.
        </p>
        <p>
          The simulator offers 27 base components, including I/O,
          logic gates, memory, plexers, and wiring utilities. With
          those components,{' '}
          <strong>it is possible to build fun circuits</strong>, like{' '}
          <a
            href="https://bohler.dev/logossim/?example=Darth%20Vader"
            rel="noopener noreferrer"
            target="_blank"
          >
            this one, that play{' '}
            <em>&ldquo;The Imperial March&rdquo;</em> from the Star
            Wars franchise
          </a>
          .
        </p>
        <p>
          Every component has its own set of configurations, which can
          be set by the user and determine how it looks and behaves
          during the simulation.
        </p>
        <p>
          The core principle of this project is to be easily
          understandable by anyone with some web development
          background (HTML, CSS, and JS). To achieve this, I
          implemented a custom-built logic simulation engine.
        </p>
        <p>
          This engine runs on a{' '}
          <a
            href="https://developer.mozilla.org/docs/Web/API/Web_Workers_API"
            rel="noopener noreferrer"
            target="_blank"
          >
            Web Worker
          </a>{' '}
          thread and orchestrates the simulation, handling user input,
          propagating signals, and communicating with the UI thread
          via messages.
        </p>
        <p>
          The user interface was built on top of{' '}
          <a
            href="https://github.com/projectstorm/react-diagrams"
            rel="noopener noreferrer"
            target="_blank"
          >
            <code>react-diagrams</code>
          </a>
          , which was heavily customized to support bifurcations
          across links, right-angle links, copy & paste and undo &
          redo functionalities, among other customizations implemented
          to make <strong>Logossim</strong> look and feel like
          Logisim.
        </p>
        <p>Some other features of this application are:</p>
        <ul>
          <li>Component configurator with previews</li>
          <li>A welcoming and informative tour</li>
          <li>Saving and loading of circuit files</li>
          <li>Auto saving</li>
          <li>Keyboard shortcuts</li>
        </ul>
      </>
    ),
    folder: 'logossim',
    name: 'logossim',
    repo: 'logossim',
    subtitle:
      'An open-source logic digital simulator built for the web',
    title: 'Logossim',
  },
  {
    description: (
      <>
        <p>
          The inspiration for this project came to me after I realized
          how many developers had trouble understanding
          functional-styled methods like <code>map</code>,{' '}
          <code>filter</code>, <code>reduce</code> or even{' '}
          <code>Object.entries</code> or{' '}
          <code>Object.fromEntries</code> on JavaScript.
        </p>
        <p>
          I started noticing that people would understand those
          concepts much faster by visualizing a flowchart that
          explains how data gets transformed through each method.
        </p>
        <p>
          Thus <strong>What the Filter?</strong> was born with a
          simple vision: the user inputs some code, and the
          application generates a diagram detailing each
          transformation and each value in intermediate steps.
        </p>
        <p>
          Before building such diagram, the application transforms the
          code into an Abstract Syntax Tree (AST) and detects the
          initial input. It then performs static analysis to determine
          the order in which every method would get called. After
          that, it executes them with their corresponding inputs to
          determine all intermediate values.
        </p>
        <p>
          <strong>What the Filter?</strong> also warns users about
          JavaScript methods that may have pitfalls:
        </p>
        <ul>
          <li>
            methods that mutate the object instead of returning new
            ones (like <code>splice</code>)
          </li>
          <li>
            <code>sort</code>, which will infamously cast numbers to
            strings before sorting if no comparing function gets
            provided
          </li>
        </ul>
        <p>
          <strong>Another convenient feature:</strong> should any
          error occur during a transformation, the diagram still gets
          generated up until the method that failed, and the output
          tries to explain what went wrong based on common mistakes.
        </p>
        <p>
          <strong>What the Filter?</strong> can be helpful for new
          developers trying to learn functional programming concepts,
          but it can also be used by experienced developers to debug
          and understand more complex transformations.
        </p>
      </>
    ),
    folder: 'what-the-filter',
    name: 'what the filter?',
    repo: 'what-the-filter',
    subtitle:
      'A visual playground to JavaScript array and object transformations',
    title: 'What the Filter?',
  },
];

export type Project = {
  description: ReactElement;
  folder: string;
  name: string;
  repo: string;
  subtitle: string;
  title: string;
};
