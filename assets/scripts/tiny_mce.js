import tinymce from 'tinymce';
import 'tinymce/models/dom';

/* Default icons are required for TinyMCE 5.3 or above */
import 'tinymce/icons/default';

/* A theme is also required */
import 'tinymce/themes/silver';

/* Import the skin */
import 'tinymce/skins/ui/oxide/skin.css';

/* Import content css */
import 'tinymce/skins/ui/oxide/content.css';
import 'tinymce/skins/content/default/content.css';

/* Import plugins */
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/code';
import 'tinymce/plugins/emoticons';
import 'tinymce/plugins/emoticons/js/emojis';
import 'tinymce/plugins/link';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/table';

export default function () {
    document.addEventListener('DOMContentLoaded', function () {
        tinymce.init({
            selector: '.tinymce',
            plugins: 'advlist code emoticons link lists table',
            toolbar: 'undo redo | bold italic removeformat | bullist numlist table | link emoticons ',
            menubar: false,
            statusbar: false,
        });
    });
}
