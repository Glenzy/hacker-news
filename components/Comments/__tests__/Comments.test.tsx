import { render, fireEvent, getByRole } from '@testing-library/react';
import Comments from '../Comments';

describe('<Comments /> component', () => {
  const MOCK = {
    comments: [
      {
        by: 'jaytaylor',
        id: 22972786,
        kids: [123456],
        parent: 22972661,
        text:
          'Kudos to the OP, I&#x27;m glad this got posted on hacker news because Snap is so ridiculously broken.<p>Since 16.04, Snaps have been a huge pain for me with running LXC in production environments.<p>By default, Snap applies updates and restarts Systemd services anytime it likes, and there&#x27;s no way to turn this behavior off!  The only way to get around it is to download the Snap package binary and install that directly.  Then Snap won&#x27;t &quot;know&quot; where to get updates.<p>(Caveat emptor: &quot;Workarounds&quot; like this can easily lead to a bad security scenario, since any critical security patches won&#x27;t be installed by any standard system update process)<p>Did I mention that a fair percentage of the time the Snap updates would leave LXC in a completely broken state?  In production!  Requiring full reinstall and reformat of the ZFS volume to fix it.<p>The final nail in the coffin in this scenario comes in the form of Snap being the official recommended way to install LXC.  I don&#x27;t know if Stéphane and friends even publish Debian packages anymore.<p>I get the idea behind snap and appreciate it, but the lack of configurability and no clear definition of what stable really even means . . .',
        time: 1587761535,
        type: 'comment',
      },
    ],
  };

  it('should mount', async () => {
    const { getByText } = render(<Comments {...MOCK} />);
    expect(getByText('comments (1)')).toBeInTheDocument();
  });

  it('shows comments', async () => {
    const { getByText } = render(<Comments {...MOCK} />);
    fireEvent.click(getByText('comments (1)'));
    expect(getByText(/Kudos to the OP/)).toBeInTheDocument();
  });
});
