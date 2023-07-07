import fs from 'fs';
import { writeJSON } from "write-json-safe";

/**
 * Get the right json from the data folder based on the request
 */


/**
 * Function to read the csv file and response the data
 */
export async function getTheSchedule(year) {
  fs.readFile('../data/student.json', (err, data) => {
    if (err) throw err;
    //find all teachers strings
    let student = JSON.parse(data);
    console.log(student);
  });
}

export function uploadFile(json) {
  console.log('Writing file...')
  writeJSON('./data/output.json', json)
  console.log('File written!')
}