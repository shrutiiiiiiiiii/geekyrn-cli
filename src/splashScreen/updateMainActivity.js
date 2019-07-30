const fs = require('fs');

const updateMainActivity = () => {
  const temp = process.cwd().split('/');
  const dir = temp[temp.length - 1];
  const path =
    process.cwd() +
    '/android/app/src/main/java/com/' +
    dir +
    '/MainActivity.java';

  const content =
    `package com.` +
    dir +
    `;

import android.os.Bundle;
import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "` +
    dir +
    `";
    }
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);
        super.onCreate(savedInstanceState);
    }
}
`;

  fs.writeFileSync(path, content, 'utf-8');
};

module.exports = updateMainActivity;
