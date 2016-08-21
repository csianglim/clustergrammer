module.exports = function make_default_cat_data(cgm){

  // working for rows only since only rows are supported for updating


  var row_nodes = cgm.params.network_data.row_nodes;
  var title_sep = ': ';

  // contains all the category information stored as an array of
  // cat_type
  var cat_data = [];
  var cat_type;
  var cat_info;
  var found_cat_title;


  _.each(row_nodes, function(inst_node){

    var all_props = _.keys(inst_node);

    _.each(all_props, function(inst_prop){

      if (inst_prop.indexOf('cat-') > -1){

        var cat_name = inst_node[inst_prop]

        // default title and name
        var cat_title = inst_prop;
        var cat_name = inst_node[inst_prop]
        var cat_string = inst_node[inst_prop]
        var cat_row_name = inst_node['name']

        if (cat_string.indexOf(title_sep) > -1){
          cat_title = cat_string.split(title_sep)[0];
          cat_name  = cat_string.split(title_sep)[1];
        }

        // cat_data is empty
        if (cat_data.length === 0){

          add_new_cat_type(cat_title, cat_name, cat_row_name);

        // cat_data is not empty
        } else {

          // look for cat_title in cat_data
          found_cat_title = false;
          _.each(cat_data, function(inst_cat_type){

            // check each cat_type object for a matching title
            if (cat_title === inst_cat_type.cat_title){
              found_cat_title = true;
            }

          });

          // did not find category type, initialize category type object
          if (found_cat_title === false){

          }



        }


        // // save to cat_type dictionary
        // if (_.has(types_dict, cat_title)){
        //   types_dict[cat_title].cats.push(inst_node.name);
        // } else {
        //   types_dict[cat_title] = {};
        //   types_dict[cat_title].cats = [];
        //   types_dict[cat_title].cats.push(inst_node.name);
        // }

      }

    });

  });



  function add_new_cat_type(cat_title, cat_name, cat_row_name){

    // initialize cat_type object to push to cat_data
    cat_type = {};
    cat_type.cat_title = cat_title;
    cat_type.cats = []

    // initialize cat_info (e.g. 'true' category has members [...])
    cat_info = {};
    cat_info.cat_name = cat_name;
    cat_info.members = [];
    cat_info.members.push(cat_row_name);

    cat_type.cats.push(cat_info);

    cat_data.push(cat_type);

  }

  console.log(cat_data);



  // var cat_type = {};
  // cat_type.cat_title = 'title_of_category';
  // cat_type.cats = []

  // // the information about a specific category,
  // // e.g. the 'true' category has two members
  // var cat_info = {}
  // cat_info.cat_name = 'true'
  // cat_info.members = ['SRC','STK24']

  // cat_type.cats.push(cat_info)

  // cat_data.push(cat_type)

  return cat_data;
}