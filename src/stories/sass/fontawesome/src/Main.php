<?php
namespace RBMedia\FontAwesome;

use RBMedia\Dio\Helpers\Registry;

class Main
{

    /** @var array Contains all possible icons */
    private static $icons = null;

    /**
     * Call static magic method
     * @param string $name Name of the function called static
     * @param array $arguments Contains given parameters
     * @return mixed Depends on called-function
     */

    public static function __callStatic($name, $arguments = [])
    {
        if (self::$icons === null) {
            self::$icons = self::loadIcons();
        }

        if ($name == 'getIcon') {
            return call_user_func_array(
                [get_called_class(), 'getIcon'],
                $arguments
            );
        }

        return false;
    }
    
    /**
     * Get a specific icon from the db
     * @param string $iconId Unique key for the icon
     * @return string|null Returns the icon-class or null if not found.
     */

    private static function getIcon($iconId)
    {
        return isset(self::$icons[$iconId]) ? self::$icons[$iconId] : null;
    }

    /**
     * Load all icons
     * @return array Contains an array with a id-class format
     */

    private static function loadIcons()
    {
        $db = Registry::get('Database');
        $results = $db->query('SELECT `id`,`class` FROM `Icon`;');
        return array_column($results, 'class', 'id');
    }
}
