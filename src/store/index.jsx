import React from "react";
import useGlobalHook from "use-global-hook";
import * as actions from "../actions";
import Book from "../models/Book";

const initialState = {
  personalLibrary: [
    new Book(
      0,
      "Alan Watts",
      "The Wisdom of Insecurity",
      4,
      "In this fascinating book, Alan Watts explores man's quest for psychological security, examining our efforts to find spiritual and intellectual certainty in the realms of religion and philosophy. The Wisdom of Insecurity underlines the importance of our search for stability in an age where human life seems particularly vulnerable and uncertain. Watts argues our insecurity is the consequence of trying to be secure and that, ironically, salvation and sanity lie in the recognition that we have no way of saving ourselves."
    ),
    new Book(
      1,
      "Seneca",
      "On the Shortness of Life",
      5,
      "De Brevitate Vitae (English: On the Shortness of Life) is a moral essay written by Seneca the Younger, a Roman Stoic philosopher, sometime around the year 49 AD, to his father-in-law Paulinus. The philosopher brings up many Stoic principles on the nature of time, namely that people waste much of it in meaningless pursuits. According to the essay, nature gives people enough time to do what is really important and the individual must allot it properly. In general, time is best used by living in the present moment in pursuit of the intentional, purposeful life."
    )
  ],
  friendsLibrary: [
    new Book(
      0,
      "Marcus Aurelius",
      "Meditations",
      5,
      "Meditations is a series of personal writings by Marcus Aurelius, Roman Emperor from 161 to 180 AD, recording his private notes to himself and ideas on Stoic philosophy. Marcus Aurelius wrote the 12 books of the Meditations in Koine Greek as a source for his own guidance and self-improvement."
    ),
    new Book(
      1,
      "Seneca",
      "On the Shortness of Life",
      5,
      "De Brevitate Vitae (English: On the Shortness of Life) is a moral essay written by Seneca the Younger, a Roman Stoic philosopher, sometime around the year 49 AD, to his father-in-law Paulinus. The philosopher brings up many Stoic principles on the nature of time, namely that people waste much of it in meaningless pursuits. According to the essay, nature gives people enough time to do what is really important and the individual must allot it properly. In general, time is best used by living in the present moment in pursuit of the intentional, purposeful life."
    )
  ],
  filter: ""
};
const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
