# is-date-valid
Contains a single function, is-date-valid. It is a function to check if the date valid or not.
Leap year for february is supported.
For example,
2019-01-01 >> Valid
2019-02-30 >> Invalid
2019-04-31 >> Invalid
2019-05-32 >> Invalid

Actually, this is already done in javascript engine (new Date ("2019-01-01")).
However, Some browsers behave differently, like firefox.

So, using this function ensure that all browsers behaves in the same way.
