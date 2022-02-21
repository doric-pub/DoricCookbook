package pub.doric.android;

import android.app.Application;

import pub.doric.Doric;
import pub.doric.devkit.DoricDev;

import pub.doric.dangle.library.DangleLibrary;
import pub.doric.library.three.DoricThreeLibrary;


public class MainApplication extends Application {
    @Override
    public void onCreate() {
        super.onCreate();
        Doric.init(this);
        DoricDev.getInstance();

        Doric.registerLibrary(new DangleLibrary());
        Doric.registerLibrary(new DoricThreeLibrary());
    }
}
