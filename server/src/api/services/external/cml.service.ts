import axios from 'axios';
import { ServerError } from '../../errors';

const HISTORY_URL = 'https://crystalmathlabs.com/tracker/api.php?type=datapoints';

/**
 * Fetches the player history from the CML API.
 */
async function getCMLHistory(username: string, time: number): Promise<string[]> {
  const URL = `${HISTORY_URL}&player=${username}&time=${time}`;

  try {
    // Fetch the data through the API Url
    const { data } = await axios.get(URL);

    // Validate the response data
    if (!data || !data.length || data === '-1') {
      throw new Error();
    }

    // Separate the data into rows and filter invalid ones
    return data.split('\n').filter(r => r.length);
  } catch (e) {
    throw new ServerError('Failed to load history from CML.');
  }
}

export { getCMLHistory };
